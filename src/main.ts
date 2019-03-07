import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);

  const options = new DocumentBuilder()
    .setTitle('eSports test example')
    .setDescription('User data API')
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
