import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, Unique } from 'typeorm';
import { Entry } from 'src/entry/entry.entity';
import * as bcrypt from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
@Unique(["username"])
export class User {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  @ApiProperty()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'int', default: 0 })
  score?: number;

  @OneToOne(() => Entry, {
    cascade: true
  })
  @JoinColumn()
  entries: Entry[];

  constructor(user: User) {
    if (user) {
      this.username = user.username;
      this.password = bcrypt.hashSync(user.password, 8);
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.score = 0;
    }
  }

  checkPassword(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}