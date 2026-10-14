import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { ConflictException } from '@nestjs/common';
import { ImoveisService } from './imoveis.service';
import { Imovel } from './schema/imoveis.schema';

class ImovelModelMock {
  constructor(private data: any) {}
  
  // Simula o método save() quando instanciamos 'new this.imovelModel()'
  save = jest.fn().mockResolvedValue(this.data); 

  // Simulamos os métodos estáticos do Mongoose
  static findOne = jest.fn();
  static find = jest.fn();
  static findById = jest.fn();
  static findByIdAndUpdate = jest.fn();
  static findByIdAndDelete = jest.fn();
}

describe('ImoveisService', () => {
  let service: ImoveisService;
  let model: typeof ImovelModelMock;

  beforeEach(async () => {
    // 2. Configuramos o módulo de teste
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ImoveisService,
        {
          provide: getModelToken(Imovel.name),
          useValue: ImovelModelMock, // Injetamos nosso Mock ao invés do banco real
        },
      ],
    }).compile();

    service = module.get<ImoveisService>(ImoveisService);
    model = module.get(getModelToken(Imovel.name));
  });

  // Limpa os mocks antes de cada teste
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve ser definido', () => {
    expect(service).toBeDefined();
  });

  describe('create()', () => {
    it('deve lançar um ConflictException se o CPE já existir', async () => {
      // Preparamos o Mock para fingir que achou um imóvel no banco
      model.findOne.mockReturnValue({
        exec: jest.fn().mockResolvedValue({ CPE: '12345', municipio: 'CURITIBA' }),
      });

      const dto = { CPE: '12345' };

      // Esperamos que a chamada do método resulte num erro ConflictException
      await expect(service.create(dto)).rejects.toThrow(ConflictException);
      await expect(service.create(dto)).rejects.toThrow('Já existe um imóvel cadastrado com o CPE: 12345');
    });

    it('deve criar e salvar um novo imóvel se o CPE não existir', async () => {
      // Preparamos o Mock para fingir que NÃO achou nada no banco (CPE livre)
      model.findOne.mockReturnValue({
        exec: jest.fn().mockResolvedValue(null),
      });

      const dto = { CPE: '99999', municipio: 'LONDRINA' };
      const resultado = await service.create(dto);

      expect(resultado).toEqual(dto);
      expect(model.findOne).toHaveBeenCalledWith({ CPE: '99999' });
    });
  });
});
