import { UseGuards, Controller, Get, Request, Post, Body } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { IUser, User } from './user.entity';
import { UserService } from './user.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(
        private authService: AuthService,
        private userService: UserService) { }

    @ApiOperation({ summary: 'Register endpoint' })
    @Post()
    async register(@Body() user: IUser) {
        return this.authService.login(await this.userService.register(user));
    }

    @ApiOperation({ summary: 'Login endpoint' })
    @UseGuards(LocalAuthGuard)
    @Post()
    async login(@Body() user: User) {
        return this.authService.login(user);
    }

    @ApiOperation({ summary: 'User get endpoint' })
    @UseGuards(JwtAuthGuard)
    @Get()
    async findUser(@Request() req): Promise<User> {
        return this.userService.findOne(req.username);
    }

    @ApiOperation({ summary: 'Summary get endpoint' })
    @UseGuards(JwtAuthGuard)
    @Get()
    getSummary(): void /*TODO change this*/ {
        //TOO implement
    }
}
