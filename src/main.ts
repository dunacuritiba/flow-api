async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // Porta dinâmica do Render ou fallback para 3000 localmente
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Aplicação rodando na porta ${port}`);
}
bootstrap();
