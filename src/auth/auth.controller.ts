import { Controller, Post, Body } from '@nestjs/common';
import { AdherentService } from '../adherent/adherent.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private adherentService: AdherentService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return await this.adherentService.create(registerDto); // Hashé le mot de passe dans un projet réél
  }
}