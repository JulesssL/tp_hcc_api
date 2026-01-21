import { Adherent, Role } from './adherent.entity';
import { IsEmail, IsNotEmpty, IsString, IsEnum, IsOptional, IsDateString } from 'class-validator';

export class CreateAdherentDto {
  @IsEmail({}, { message: 'Email invalide' })
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  nom: string;

  @IsString()
  @IsNotEmpty()
  prenom: string;

  @IsEnum(Role)
  @IsOptional() 
  role?: Role;

  @IsDateString()
  @IsOptional()
  dateNaissance?: string;
}
