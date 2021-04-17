import { Controller, UseGuards, Post, Body } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { EntryService } from './entry.service';
import { Entry } from './entry.entity';

@ApiTags('entry')
@Controller('entry')
export class EntryController {
    constructor(
        private entryService: EntryService) { }

    @ApiOperation({ summary: 'Entry add endpoint' })
    @UseGuards(JwtAuthGuard)
    @Post()
    addEntry(@Body() entry: Entry): void {
        this.entryService.addEntry(entry);
    }
}
