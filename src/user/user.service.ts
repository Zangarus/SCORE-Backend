import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
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

    async findAll(): Promise<User[] | undefined> {
        console.log("findAll");
        return this.userRepository.find({ select: ["username", "firstName", "lastName", "score"] });
    }

    async register(userData: User) {
        return this.userRepository.save(new User(userData));
    }
}