import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Entry } from 'src/entry/entry.entity';
import { Interface } from 'node:readline';

export interface IUser {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  username: string;

  @Column()
  password: string; //TODO don't store password in plain text and instead use https://github.com/kelektiv/node.bcrypt.js#readme

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

  constructor(user: IUser) {
    if (user) {
      this.username = user.username;
      this.password = user.password;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.score = 0;
    }
  }
}