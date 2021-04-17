import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/user/user.entity';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: IUser) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
