import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { GqlAuthGuard } from './auth.guard';
import { JwtModule } from '@nestjs/jwt/dist/jwt.module';
import { JwtStrategy } from './jwt.strategy';
import { LogModule } from 'src/log/log.module';
import { Module } from '@nestjs/common';
import { SECRET } from 'src/options/config/config';
import { TokenEntity } from './token/token.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    UserModule,
    LogModule,
    JwtModule.register({ secret: SECRET }),
    TypeOrmModule.forFeature([TokenEntity])
  ],
  providers: [AuthService, AuthResolver, JwtStrategy, GqlAuthGuard],
  exports: [
    JwtModule, AuthService
  ],
})

export class AuthModule { }
