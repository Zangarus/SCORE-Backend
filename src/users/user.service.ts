
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUser, User } from 'src/users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async findOne(username: string): Promise<User | undefined> {
        return this.usersRepository.findOne({
            where: { username: username },
            relations: ['entries'],
        })
    }

    async register(userData: IUser) {
        const userDummy = new User(userData);
        return this.usersRepository.save(userDummy);

    }
}