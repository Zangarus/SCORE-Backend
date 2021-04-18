import { Entity, Column, OneToOne, JoinColumn, Unique, PrimaryColumn, OneToMany } from 'typeorm';
import { Entry } from 'src/entry/entry.entity';
import * as bcrypt from 'bcrypt';
import { Score } from 'src/score/score.entity';

@Entity()
@Unique(["username"])
export class User {

  @PrimaryColumn()
  username: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(() => Entry, entry => entry.user, {
    cascade: true
  })
  @JoinColumn()
  entries?: Entry[];

  @OneToOne(() => Score, {
    cascade: true
  })
  @JoinColumn()
  score?: Score;

  constructor(user: User) {
    if (user) {
      this.username = user.username;
      this.password = bcrypt.hashSync(user.password, 8);
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.score = new Score();
    }
  }

  checkPassword(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}