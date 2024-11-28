import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('NestJS')
    .setDescription('The NestJS Framework')
    .setVersion('1.0')
    .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe(
    { whitelist: true, }
  ));
  app.enableCors(/*origin : 'hhtps://www.google.com'*/);
  await app.listen(process.env.PORT ?? 3001);
  console.log("🚀 Sever is runing at ~ http://localhost:3001 ~ 🚀") 
  console.log("🚀 Try to access ~ http://localhost:3001/api ~ 🚀")
}
bootstrap();
//```[_{{{CITATION{{{_1{OpenAPI (Swagger) | NestJS - A progressive Node.js framework](https://docs.nestjs.com/recipes/swagger)