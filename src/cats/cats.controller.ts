import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/cat.dto'

@Controller('cats')
export class CatsController {
  @Get()
  list (): any[] {
    return [{ name: 'pero' }]
  }

  @Post()
  create (@Body() createCatDto: CreateCatDto) {
    return 'cat created'
  }

  @Get(':id')
  get (@Param('id') id: string): string {
    return `cat ${id}`
  }
}
