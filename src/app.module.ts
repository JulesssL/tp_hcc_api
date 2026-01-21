import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdherentModule } from './adherent/adherent.module'; 
import { AuthModule } from './auth/auth.module';
import { ActualiteModule } from './actualite/actualite.module';
import { MatchModule } from './match/match.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'hcc_db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AdherentModule,
    AuthModule,
    ActualiteModule,
    MatchModule
  ],
  
})
export class AppModule {}