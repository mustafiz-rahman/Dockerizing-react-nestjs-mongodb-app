import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true, origin: "http://localhost:3000"
  });
  const config = new DocumentBuilder()
  .setTitle('Test')
  .setDescription('The Test API description')
  .setVersion('1.0')
  .addTag('Test')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3001);
}
bootstrap();
