import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Match } from './config/match.entity';
import { Adherent, Role } from '../adherent/config/adherent.entity';

@Injectable()
export class MatchService {
    constructor(
        @InjectRepository(Match) private matchRepo: Repository<Match>,
        @InjectRepository(Adherent) private adherentRepo: Repository<Adherent>,
    ) { }

    async create(matchData: Partial<Match>) {
        const existingMatch = await this.matchRepo.findOne({ where: { date: matchData.date } });
        if (existingMatch) {
            throw new BadRequestException('Un match est déjà prévu ce jour-là.');
        }
        const newMatch = this.matchRepo.create(matchData);
        return await this.matchRepo.save(newMatch);
    }

    async findAll() {
        return await this.matchRepo.find({ relations: ['participants'] });
    }

    async registerPlayer(matchId: number, adherentId: number) {
        const match = await this.matchRepo.findOne({ where: { id: matchId }, relations: ['participants'] });
        const adherent = await this.adherentRepo.findOne({ where: { id: adherentId } });

        if (!match || !adherent) throw new NotFoundException('Match ou Adhérent introuvable');

        if (adherent.role !== Role.JOUEUR) {
            throw new BadRequestException("Seuls les joueurs peuvent s'inscrire aux matchs.");
        }

        match.participants.push(adherent);
        return await this.matchRepo.save(match);
    }

    async update(id: number, updateData: Partial<Match>) {
        const match = await this.matchRepo.findOne({ where: { id } });
        if (!match) throw new NotFoundException('Match introuvable');

        Object.assign(match, updateData);
        return await this.matchRepo.save(match);
    }

    async unregisterPlayer(matchId: number, adherentId: number) {
        const match = await this.matchRepo.findOne({
            where: { id: matchId },
            relations: ['participants']
        });

        if (!match) throw new NotFoundException('Match introuvable');
        
        match.participants = match.participants.filter(p => p.id !== adherentId);

        return await this.matchRepo.save(match);
    }
}