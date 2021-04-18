import { Controller, UseGuards, Post, Body } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { EntryService } from './entry.service';
import { Entry } from './entry.entity';
import { ScoreService } from 'src/score/score.service';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.entity';

@ApiTags('entry')
@Controller('entry')
export class EntryController {
    constructor(
        private entryService: EntryService,
        private scoreService: ScoreService,
        private userService: UserService) { }

    @ApiOperation({ summary: 'Entry add endpoint' })
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Post()
    addEntry(@Body() entry: Entry): Promise<User> {
        console.log("AddEntry");
        this.scoreService.updateScore(entry);
        this.entryService.addEntry(entry);
        return this.userService.findOne(entry.user.username);
    }
}
