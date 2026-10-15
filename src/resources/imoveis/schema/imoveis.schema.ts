import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ImovelDocument = Imovel & Document;

@Schema({ collection: 'imoveis', timestamps: true }) // Ajuste o nome da collection se necessário
export class Imovel {
  @Prop({ unique: true, type: String })
  CPE?: string;
  @Prop() municipio?: string;
  @Prop() endereco?: string;
  @Prop() complemento?: string;
  @Prop() bairro?: string;
  @Prop() quadra?: string;
  @Prop() administracao?: string;
  @Prop() classificacao?: string;
  @Prop() denominacao?: string;
  @Prop() terreno?: string;
  @Prop() proprietario?: string;
  @Prop() latitude?: string;
  @Prop() longitude?: string;
  @Prop() objeto?: string;
  @Prop() orgaoOcupacao?: string;
  @Prop() orgaoResponsavel?: string;
  @Prop() tipoEdificacao?: string;
  @Prop() caracteristica?: string;
  @Prop() situacaoCartorial?: string;
  @Prop() tipoDocCartorial?: string;
  @Prop() docCartorial?: string;
  @Prop() dataIncorporação?: string;
  @Prop() docTabelional?: string;
  @Prop() formaOcupacional?: string;
  @Prop() tipoTermo?: string;
  @Prop() situacaoTermo?: string;
  @Prop() areaTotalTerreno?: string;
  @Prop() areaTotalLevantada?: string;
  @Prop() quantidadeEdificacoes?: string;
  @Prop() areaTotalEdificacoes?: string;
  @Prop() quantidadeOcupacoes?: string;
  @Prop() areaTotalOcupacoes?: string;
  @Prop() valorTotal?: string;
  @Prop() numPessoasAtendidas?: string;
  @Prop() numServidores?: string;
}

export const ImovelSchema = SchemaFactory.createForClass(Imovel);
