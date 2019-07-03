import { Module } from '@nestjs/common';
import { DogsController } from './dogs/dogs.controller';

@Module({
  imports: [],
  controllers: [DogsController],
  providers: [],
})
export class DogModule {}
