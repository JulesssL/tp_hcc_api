import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Adherent } from './config/adherent.entity';
import { AdherentController } from './adherent.controller';
import { AdherentService } from './adherent.service';

@Module({
  imports: [TypeOrmModule.forFeature([Adherent])],
  controllers: [AdherentController],
  providers: [AdherentService],
  exports: [AdherentService],
})
export class AdherentModule {}