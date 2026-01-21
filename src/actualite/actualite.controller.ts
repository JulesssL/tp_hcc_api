import { Controller, Get, Post, Body, Param, ParseIntPipe, UseGuards, Request } from '@nestjs/common';
import { ActualiteService } from './actualite.service';
import { CreateActualiteDto } from './config/create-actualite.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../adherent/config/adherent.entity';

@Controller('actualites')
export class ActualiteController {
  constructor(private readonly actualiteService: ActualiteService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.CONTRIBUTEUR)
  create(@Body() createActualiteDto: CreateActualiteDto, @Request() req) {
    return this.actualiteService.create(createActualiteDto, req.user);
  }

  @Get()
  findAll() {
    return this.actualiteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.actualiteService.findOne(id);
  }
}