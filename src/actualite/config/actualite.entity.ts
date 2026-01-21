import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Adherent } from '../../adherent/config/adherent.entity';

@Entity()
export class Actualite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titre: string;

  @Column({ type: 'text' })
  contenu: string;

  @CreateDateColumn()
  datePublication: Date;

  @ManyToOne(() => Adherent, { eager: true }) // true permet de charger l'auteur automatiquement
  auteur: Adherent;
}