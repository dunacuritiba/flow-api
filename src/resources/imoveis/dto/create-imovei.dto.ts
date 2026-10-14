import { IsString, IsOptional, IsInt } from 'class-validator';

export class CreateImoveisDto {
  @IsInt()
  @IsOptional()
  CPE?: number;
  @IsString() @IsOptional() municipio?: string;
  @IsString() @IsOptional() endereco?: string;
  @IsString() @IsOptional() complemento?: string;
  @IsString() @IsOptional() bairro?: string;
  @IsString() @IsOptional() quadra?: string;
  @IsString() @IsOptional() administracao?: string;
  @IsString() @IsOptional() classificacao?: string;
  @IsString() @IsOptional() denominacao?: string;
  @IsString() @IsOptional() terreno?: string;
  @IsString() @IsOptional() proprietario?: string;
  @IsString() @IsOptional() latitude?: string;
  @IsString() @IsOptional() longitude?: string;
  @IsString() @IsOptional() objeto?: string;
  @IsString() @IsOptional() orgaoOcupacao?: string;
  @IsString() @IsOptional() orgaoResponsavel?: string;
  @IsString() @IsOptional() tipoEdificacao?: string;
  @IsString() @IsOptional() caracteristica?: string;
  @IsString() @IsOptional() situacaoCartorial?: string;
  @IsString() @IsOptional() tipoDocCartorial?: string;
  @IsString() @IsOptional() docCartorial?: string;
  @IsString() @IsOptional() dataIncorporação?: string;
  @IsString() @IsOptional() docTabelional?: string;
  @IsString() @IsOptional() formaOcupacional?: string;
  @IsString() @IsOptional() tipoTermo?: string;
  @IsString() @IsOptional() situacaoTermo?: string;
  @IsString() @IsOptional() areaTotalTerreno?: string;
  @IsString() @IsOptional() areaTotalLevantada?: string;
  @IsString() @IsOptional() quantidadeEdificacoes?: string;
  @IsString() @IsOptional() areaTotalEdificacoes?: string;
  @IsString() @IsOptional() quantidadeOcupacoes?: string;
  @IsString() @IsOptional() areaTotalOcupacoes?: string;
  @IsString() @IsOptional() valorTotal?: string;
  @IsString() @IsOptional() numPessoasAtendidas?: string;
  @IsString() @IsOptional() numServidores?: string;
}
