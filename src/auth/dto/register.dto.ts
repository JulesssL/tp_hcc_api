import { IsEmail, IsEnum, IsNotEmpty, IsString} from 'class-validator';

export class RegisterDto {
    @IsString()
    @IsNotEmpty({ message: 'Le nom est requis' })
    nom: string;

    @IsString()
    @IsNotEmpty({ message: 'Le prénom est requis' })
    prenom: string;

    @IsEmail({}, { message: 'Veuillez fournir une adresse email valide' })
    email: string;

    @IsString()
    motDePasse: string;

    @IsEnum(['coach', 'contributeur', 'joueur'], { message: 'Le rôle doit être coach, contributeur ou joueur' })
    role: 'coach' | 'contributeur' | 'joueur';
}