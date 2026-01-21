import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actualite } from './config/actualite.entity';
import { ActualiteService } from './actualite.service';
import { ActualiteController } from './actualite.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Actualite])],
  controllers: [ActualiteController],
  providers: [ActualiteService],
})
export class ActualiteModule {}