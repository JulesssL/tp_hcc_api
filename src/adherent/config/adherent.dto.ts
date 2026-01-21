import { Adherent, Role } from './adherent.entity';

export type CreateAdherentDto = {
  email: string;
  password: string;
  nom: string;
  prenom: string;
  role?: Role;
  dateNaissance: Date;
};
