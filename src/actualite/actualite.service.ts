import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Actualite } from './config/actualite.entity';
import { CreateActualiteDto } from './config/create-actualite.dto';
import { Adherent } from '../adherent/config/adherent.entity';

@Injectable()
export class ActualiteService {
  constructor(
    @InjectRepository(Actualite)
    private actualiteRepository: Repository<Actualite>,
  ) {}

  async create(createActualiteDto: CreateActualiteDto, auteur: Adherent) {
    const nouvelleActu = this.actualiteRepository.create({
      ...createActualiteDto,
      auteur,
    });
    return await this.actualiteRepository.save(nouvelleActu);
  }

  async findAll() {
    return await this.actualiteRepository.find();
  }

  async findOne(id: number) {
    return await this.actualiteRepository.findOne({ where: { id } });
  }
}