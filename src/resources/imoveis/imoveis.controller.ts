import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ImoveisService } from './imoveis.service';
import { CreateImoveisDto } from './dto/create-imovei.dto';
import { UpdateImoveisDto } from './dto/update-imovei.dto';

@Controller('imoveis')
export class ImoveisController {
  constructor(private readonly imoveisService: ImoveisService) {}

  @Post()
  create(@Body() createImovelDto: CreateImoveisDto) {
    return this.imoveisService.create(createImovelDto);
  }

  @Get()
  findAll() {
    return this.imoveisService.findAll();
  }

  // Exemplos de rotas com Queries Específicas:
  // GET /imoveis/busca/municipio?nome=CURITIBA
  @Get('busca/municipio')
  findByMunicipio(@Query('nome') nome: string) {
    return this.imoveisService.findByMunicipio(nome);
  }

  // GET /imoveis/busca/orgao?sigla=SEEC
  @Get('busca/orgao')
  findByOrgao(@Query('sigla') sigla: string) {
    return this.imoveisService.findByOrgaoResponsavel(sigla);
  }

  @Get('cpe/:cpe')
  findByCpe(@Param('cpe') cpe: string) {
    return this.imoveisService.findByCpe(cpe);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imoveisService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImovelDto: UpdateImoveisDto) {
    return this.imoveisService.update(id, updateImovelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imoveisService.remove(id);
  }
}
