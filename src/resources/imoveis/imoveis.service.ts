import { Injectable, NotFoundException } from '@nestjs/common';
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
    const imovelAtualizado = await this.imovelModel
      .findByIdAndUpdate(id, updateImovelDto, { new: true })
      .exec();
    if (!imovelAtualizado) throw new NotFoundException('Imóvel não encontrado');
    return imovelAtualizado;
  }

  async remove(id: string): Promise<void> {
    const resultado = await this.imovelModel.findByIdAndDelete(id).exec();
    if (!resultado) throw new NotFoundException('Imóvel não encontrado');
  }

  // --- QUERIES CUSTOMIZADAS ---

  async findByMunicipio(municipio: string): Promise<Imovel[]> {
    // Busca "case-insensitive" pelo nome do município
    return this.imovelModel
      .find({ municipio: new RegExp(`^${municipio}$`, 'i') })
      .exec();
  }

  async findByOrgaoResponsavel(orgao: string): Promise<Imovel[]> {
    // Busca propriedades que contenham a sigla/nome do órgão (ex: "SEEC")
    return this.imovelModel
      .find({ orgaoResponsavel: new RegExp(orgao, 'i') })
      .exec();
  }
}
