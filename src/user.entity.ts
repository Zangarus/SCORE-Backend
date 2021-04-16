import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Entry } from 'src/entry.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  score: number;

  @OneToOne(() => Entry, {
    cascade: true
  })
  @JoinColumn()
  entries: Entry[];
}