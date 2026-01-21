// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdherentModule } from '../adherent/adherent.module'; 
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    AdherentModule, 
    JwtModule.register({
      global: true,
      secret: 'SECRET', // Utiliser une vraie clé secrète en production
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}