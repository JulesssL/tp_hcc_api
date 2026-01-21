import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column({ unique: true })
  email: string;

  @Column() 
  password: string; 

  @Column({ default: 'joueur' })
  role: 'coach' | 'contributeur' | 'joueur';

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  dateInscription: Date;
}