import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AdherentService } from './adherent.service';
import { CreateAdherentDto } from './config/adherent.dto';

@Controller('adherent')
export class AdherentController {
  constructor(private readonly adherentService: AdherentService) {}

  @Post()
  async create(@Body() createAdherentDto: CreateAdherentDto) {
    return this.adherentService.create(createAdherentDto);
  }

  @Get()
  async findAll() {
    return this.adherentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.adherentService.findOne(id);
  }

}