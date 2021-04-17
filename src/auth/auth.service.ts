import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && user.checkPassword(pass)) {
            const { password, ...result } = user; //filtert das passwort raus
            return result;
        }
        return null;
    }

    async login(user: User) {
        const payload = { sub: user.username };
        const token = this.jwtService.sign(payload);
        return { token: token };
    }

    async checkJWT(token: string) {
        return this.jwtService.verify(token);
    }
}
