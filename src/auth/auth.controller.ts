import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private usersService: UsersService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return await this.usersService.create(registerDto); // Hashé le mot de passe dans un projet réél
  }
}