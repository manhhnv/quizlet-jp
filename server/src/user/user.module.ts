import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { LogModule } from 'src/log/log.module';

@Module({
  imports: [
    LogModule,
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [UserService, UserResolver],
  exports: [UserService]
})

export class UserModule { }
