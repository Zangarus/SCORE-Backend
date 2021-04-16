import { UseGuards } from '@nestjs/common';
import { Controller, Get, Request, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { User } from './user.entity';
import { UsersService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private authService: AuthService,
        private userService: UsersService,) { }

    @Post()
    async register(@Request() req) {
        return this.authService.login(await this.userService.register(req.user));
    }

    @UseGuards(LocalAuthGuard)
    @Post()
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findUser(@Request() req): Promise<User> {
        return this.userService.findOne(req.username);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    addEntry(): void {
        //TOO implement
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getSummary(): void /*TODO change this*/ {
        //TOO implement
    }
}
