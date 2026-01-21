import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateActualiteDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  titre: string;

  @IsString()
  @IsNotEmpty()
  contenu: string;
}