import { Controller, Get, Post } from '@nestjs/common';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    @Post()
    register(): User {
        //TOO implement
    }

    @Get()
    login(): User {
        //TOO implement
    }

    @Post()
    addEntry(): void {
        //TOO implement
    }

    @Get()
    getSummary(): void /*TODO change this*/ {
        //TOO implement
    }
}
