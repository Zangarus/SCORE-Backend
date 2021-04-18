import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { EntryModule } from './entry/entry.module';
import { ScoreModule } from './score/score.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AuthModule, UserModule, EntryModule, ScoreModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule { }
