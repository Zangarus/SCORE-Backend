import { UseGuards, Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { User } from './user.entity';
import { UserService } from './user.service';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(
        private authService: AuthService,
        private userService: UserService) { }

    @ApiOperation({ summary: 'Register endpoint' })
    @Post('/register')
    async register(@Body() user: User): Promise<{ token: string }> {
        console.log(user)
        return await this.authService.login(await this.userService.register(user));
    }

    @ApiOperation({ summary: 'Login endpoint' })
    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Body() user: User): Promise<{ token: string }> {
        return await this.authService.login(user);
    }

    @ApiOperation({ summary: 'Login verification endpoint' })
    @Get('/login')
    async checkJWT(@Param('token') token: string): Promise<string> {
        return (await this.authService.checkJWT(token));
    }

    @ApiOperation({ summary: 'User get endpoint' })
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get('/:username')
    async findUser(@Param('username') username: string): Promise<User> {
        return this.userService.findOne(username);
    }

    @ApiOperation({ summary: 'Summary get endpoint' })
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get('/summary')
    getSummary(): void /*TODO change this*/ {
        //TOO implement
    }
}
