// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdherentModule } from '../adherent/adherent.module'; 
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport'; 
import { JwtStrategy } from './strategies/jwt.strategy'; 

@Module({
  imports: [
    AdherentModule, 
    PassportModule, 
    JwtModule.register({
      global: true,
      secret: 'SECRET', 
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [AuthService, JwtStrategy], // AJOUT : Déclarer la stratégie ici
  controllers: [AuthController],
})
export class AuthModule {}