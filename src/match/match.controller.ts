import { Controller, Get, Post, Body, Param, UseGuards, Request, Patch, ParseIntPipe, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../adherent/config/adherent.entity';
import { MatchService } from './match.service';

@Controller('matchs')
export class MatchController {
    constructor(private readonly matchService: MatchService) { }

    @Post()
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.COACH)
    create(@Body() createMatchDto: any) {
        return this.matchService.create(createMatchDto);
    }

    @Get()
    findAll() {
        return this.matchService.findAll();
    }

    @Post(':id/inscription')
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.JOUEUR)
    register(@Param('id') id: number, @Request() req) {
        return this.matchService.registerPlayer(id, req.user.id);
    }

    @Delete(':id/inscription')
    @UseGuards(AuthGuard('jwt')) 
    removeInscription(@Param('id', ParseIntPipe) id: number, @Request() req) {
        return this.matchService.unregisterPlayer(id, req.user.id);
    }

    @Patch(':id')
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.COACH)
    update(@Param('id', ParseIntPipe) id: number, @Body() updateMatchDto: any) {
        return this.matchService.update(id, updateMatchDto);
    }
}