import { Controller, Get, Req, Query } from '@nestjs/common';
import { Request } from 'express'

@Controller('dogs')
export class DogsController {
  @Get()
  list (@Req() request: Request, @Query() query: any): string {
    console.log(query)
    return 'perro'
  }
}
