import { LogModule } from 'src/log/log.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [
    LogModule,
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [UserService, UserResolver],
  exports: [UserService]
})

export class UserModule { }
