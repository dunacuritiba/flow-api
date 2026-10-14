import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Imovel, ImovelDocument } from './schema/imoveis.schema';
import { CreateImoveisDto } from './dto/create-imovei.dto';
import { UpdateImoveisDto } from './dto/update-imovei.dto';

@Injectable()
export class ImoveisService {
  constructor(
    @InjectModel(Imovel.name) private imovelModel: Model<ImovelDocument>,
  ) {}

  async create(createImovelDto: CreateImoveisDto): Promise<Imovel> {
    const { CPE } = createImovelDto;
    if (CPE) {
      const imovelExistente = await this.imovelModel.findOne({ CPE }).exec();
      if (imovelExistente) {
        throw new ConflictException(
          `Já existe um imóvel cadastrado com o CPE: ${CPE}`,
        );
      }
    }
    const novoImovel = new this.imovelModel(createImovelDto);
    return novoImovel.save();
  }

  async findAll(): Promise<Imovel[]> {
    return this.imovelModel.find().exec();
  }

  async findOne(id: string): Promise<Imovel> {
    const imovel = await this.imovelModel.findById(id).exec();
    if (!imovel) throw new NotFoundException('Imóvel não encontrado');
    return imovel;
  }

  async update(id: string, updateImovelDto: UpdateImoveisDto): Promise<Imovel> {
    if (updateImovelDto.CPE) {
      const imovelExistente = await this.imovelModel
        .findOne({ CPE: updateImovelDto.CPE })
        .exec();
      if (imovelExistente && imovelExistente.id !== id) {
        throw new ConflictException(
          `O CPE ${updateImovelDto.CPE} já está em uso por outro imóvel.`,
        );
      }
    }

    const imovelAtualizado = await this.imovelModel
      .findByIdAndUpdate(id, updateImovelDto, { new: true })
      .exec();
    if (!imovelAtualizado) throw new NotFoundException('Imóvel não encontrado');
    return imovelAtualizado;
  }

  async findByCpe(cpe: number): Promise<Imovel> {
    const imovel = await this.imovelModel.findOne({ CPE: cpe }).exec();

    if (!imovel) {
      throw new NotFoundException(`Nenhum imóvel encontrado com o CPE: ${cpe}`);
    }

    return imovel;
  }

  async remove(id: string): Promise<void> {
    const resultado = await this.imovelModel.findByIdAndDelete(id).exec();
    if (!resultado) throw new NotFoundException('Imóvel não encontrado');
  }

  async findByMunicipio(municipio: string): Promise<Imovel[]> {
    return this.imovelModel
      .find({ municipio: new RegExp(`^${municipio}$`, 'i') })
      .exec();
  }

  async findByOrgaoResponsavel(orgao: string): Promise<Imovel[]> {
    return this.imovelModel
      .find({ orgaoResponsavel: new RegExp(orgao, 'i') })
      .exec();
  }
}
