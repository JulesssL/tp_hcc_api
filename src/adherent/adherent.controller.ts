import { Controller, Post, Body } from '@nestjs/common';
import { AdherentService } from './adherent.service';
import { CreateAdherentDto } from './config/adherent.dto';

@Controller('adherent')
export class AdherentController {
  constructor(private readonly adherentService: AdherentService) {}

  @Post()
  async create(@Body() createAdherentDto: CreateAdherentDto) {
    return this.adherentService.create(createAdherentDto);
  }
}