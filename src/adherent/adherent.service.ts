import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Adherent, Role } from './config/adherent.entity';
import { CreateAdherentDto } from './config/adherent.dto';

@Injectable()
export class AdherentService {
  constructor(
    @InjectRepository(Adherent)
    private adherentRepository: Repository<Adherent>,
  ) {}

  async create(createAdherentDto: CreateAdherentDto): Promise<Adherent> {
    const newAdherent = this.adherentRepository.create(createAdherentDto);
    return this.adherentRepository.save(newAdherent);
  }

  
}