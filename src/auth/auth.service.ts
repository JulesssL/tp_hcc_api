import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AdherentService } from '../adherent/adherent.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private adherentService: AdherentService,
    private jwtService: JwtService
  ) {}

  async login(email: string, pass: string) {
    const user = await this.adherentService.findByEmail(email); 
    
    if (user?.password !== pass) {
      throw new UnauthorizedException('Identifiants invalides');
    }

    const payload = { 
      sub: user.id, 
      email: user.email, 
      role: user.role 
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}