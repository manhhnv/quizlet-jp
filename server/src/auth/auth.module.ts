import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt/dist/jwt.module';
import { SECRET } from 'src/options/config/config';
import { GqlAuthGuard } from './auth.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenEntity } from './token/token.entity';

@Module({
  imports: [
    UserModule,
    JwtModule.register({ secret: SECRET }),
    TypeOrmModule.forFeature([TokenEntity])
  ],
  providers: [AuthService, AuthResolver, JwtStrategy, GqlAuthGuard],
  exports: [
    JwtModule, AuthService
  ],
})

export class AuthModule { }
