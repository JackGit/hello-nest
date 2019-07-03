import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('service.getHello')
    return 'Hello World!';
  }
}
