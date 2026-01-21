import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdherentService } from '../adherent/adherent.service';
import { CreateAdherentDto } from '../adherent/config/adherent.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private adherentService: AdherentService, 
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  signIn(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto.email, loginDto.password);
  }

  @Post('register')
  async register(@Body() createAdherentDto: CreateAdherentDto) {
    return this.adherentService.create(createAdherentDto);
  }
}