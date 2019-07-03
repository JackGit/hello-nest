import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DogModule } from './dog.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const dog = await NestFactory.create(DogModule)
  await dog.listen(3001)
}

bootstrap();
