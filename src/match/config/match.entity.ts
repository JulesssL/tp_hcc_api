import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Adherent } from '../../adherent/config/adherent.entity';

@Entity()
export class Match {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: string; 

  @Column()
  adversaire: string;

  @Column({ nullable: true })
  scoreFinal: string;

  @ManyToMany(() => Adherent)
  @JoinTable() 
  participants: Adherent[];
}