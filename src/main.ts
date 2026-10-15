import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  // Habilita CORS para que sua aplicação Frontend (ou o Swagger) consiga fazer requisições
  app.enableCors();

  // Configuração do Swagger (Mantido e funcional!)
  const config = new DocumentBuilder()
    .setTitle('Flow API')
    .setDescription(
      'Documentação da API NestJS para gerenciamento de imóveis do estado, orgãos e empresas prestadoras de serviços.',
    )
    .setVersion('1.0.3')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document); // Documentação disponível em /docs

  // O Render define a variável PORT automaticamente. Se não houver, usa a 3000 localmente.
  const port = process.env.PORT || 3000;

  await app.listen(port, '0.0.0.0'); // O '0.0.0.0' garante que o Render consiga mapear o tráfego externo
  logger.log(`🚀 Aplicação rodando com sucesso na porta ${port}`);
  logger.log(
    `📝 Documentação do Swagger disponível em: http://localhost:${port}/docs`,
  );
}
bootstrap();
