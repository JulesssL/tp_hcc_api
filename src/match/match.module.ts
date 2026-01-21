import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Match } from './config/match.entity';
import { Adherent } from '../adherent/config/adherent.entity';
import { MatchService } from './match.service';
import { MatchController } from './match.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Match, Adherent])],
  controllers: [MatchController],
  providers: [MatchService],
})
export class MatchModule {}