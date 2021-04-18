import { Module } from '@nestjs/common';
import { EntryService } from './entry.service';
import { EntryController } from './entry.controller';
import { Entry } from './entry.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScoreModule } from 'src/score/score.module';

@Module({
  imports: [TypeOrmModule.forFeature([Entry]), ScoreModule],
  providers: [EntryService],
  controllers: [EntryController]
})
export class EntryModule { }
