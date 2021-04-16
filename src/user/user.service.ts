import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUser, User } from 'src/users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async findOne(username: string): Promise<User | undefined> {
        return this.userRepository.findOne({
            where: { username: username },
            relations: ['entries'],
        })
    }

    async register(userData: IUser) {
        const userDummy = new User(userData);
        return this.userRepository.save(userDummy);

    }
}