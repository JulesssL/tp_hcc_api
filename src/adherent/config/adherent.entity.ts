import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Match } from '../../match/config/match.entity';


export enum Role {
  COACH = 'coach',
  CONTRIBUTEUR = 'contributeur',
  JOUEUR = 'joueur',
}

@Entity('adherent')
export class Adherent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column({ type: 'text', default: Role.JOUEUR })
  role: Role; 

  @Column({ type: 'date', nullable: true })
  dateNaissance: Date;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  dateInscription: Date;

  @ManyToMany(() => Match, (match) => match.participants)
  matchs: Match[];
}