import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImoveisService } from './imoveis.service';
import { ImoveisController } from './imoveis.controller';
import { Imovel, ImovelSchema } from './schema/imoveis.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Imovel.name, schema: ImovelSchema }]),
  ],
  controllers: [ImoveisController],
  providers: [ImoveisService],
  exports: [ImoveisService], // Exporta se for usar este serviço em outro módulo
})
export class ImoveisModule {}
