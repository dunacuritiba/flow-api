import { IsString, IsOptional, IsInt } from 'class-validator';
import { ApiProperty } from 'node_modules/@nestjs/swagger/dist/decorators/api-property.decorator';

export class CreateImoveisDto {
  @IsInt()
  @IsOptional()
  CPE?: string;
  @ApiProperty() @IsString() @IsOptional() municipio?: string;
  @ApiProperty() @IsString() @IsOptional() endereco?: string;
  @ApiProperty() @IsString() @IsOptional() complemento?: string;
  @ApiProperty() @IsString() @IsOptional() bairro?: string;
  @ApiProperty() @IsString() @IsOptional() quadra?: string;
  @ApiProperty() @IsString() @IsOptional() administracao?: string;
  @ApiProperty() @IsString() @IsOptional() classificacao?: string;
  @ApiProperty() @IsString() @IsOptional() denominacao?: string;
  @ApiProperty() @IsString() @IsOptional() terreno?: string;
  @ApiProperty() @IsString() @IsOptional() proprietario?: string;
  @ApiProperty() @IsString() @IsOptional() latitude?: string;
  @ApiProperty() @IsString() @IsOptional() longitude?: string;
  @ApiProperty() @IsString() @IsOptional() objeto?: string;
  @ApiProperty() @IsString() @IsOptional() orgaoOcupacao?: string;
  @ApiProperty() @IsString() @IsOptional() orgaoResponsavel?: string;
  @ApiProperty() @IsString() @IsOptional() tipoEdificacao?: string;
  @ApiProperty() @IsString() @IsOptional() caracteristica?: string;
  @ApiProperty() @IsString() @IsOptional() situacaoCartorial?: string;
  @ApiProperty() @IsString() @IsOptional() tipoDocCartorial?: string;
  @ApiProperty() @IsString() @IsOptional() docCartorial?: string;
  @ApiProperty() @IsString() @IsOptional() dataIncorporação?: string;
  @ApiProperty() @IsString() @IsOptional() docTabelional?: string;
  @ApiProperty() @IsString() @IsOptional() formaOcupacional?: string;
  @ApiProperty() @IsString() @IsOptional() tipoTermo?: string;
  @ApiProperty() @IsString() @IsOptional() situacaoTermo?: string;
  @ApiProperty() @IsString() @IsOptional() areaTotalTerreno?: string;
  @ApiProperty() @IsString() @IsOptional() areaTotalLevantada?: string;
  @ApiProperty() @IsString() @IsOptional() quantidadeEdificacoes?: string;
  @ApiProperty() @IsString() @IsOptional() areaTotalEdificacoes?: string;
  @ApiProperty() @IsString() @IsOptional() quantidadeOcupacoes?: string;
  @ApiProperty() @IsString() @IsOptional() areaTotalOcupacoes?: string;
  @ApiProperty() @IsString() @IsOptional() valorTotal?: string;
  @ApiProperty() @IsString() @IsOptional() numPessoasAtendidas?: string;
  @ApiProperty() @IsString() @IsOptional() numServidores?: string;
}
