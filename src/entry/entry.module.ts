import { Module } from '@nestjs/common';
import { EntryService } from './entry.service';
import { EntryController } from './entry.controller';
import { Entry } from './entry.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScoreModule } from 'src/score/score.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Entry]), ScoreModule, UserModule],
  providers: [EntryService],
  controllers: [EntryController]
})
export class EntryModule { }
