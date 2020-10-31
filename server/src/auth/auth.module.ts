import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt/dist/jwt.module';
import { SECRET } from 'src/config/config';
import { GqlAuthGuard } from './auth.guard';

@Module({
  imports: [UserModule,
    JwtModule.register({ secret: SECRET })
  ],
  providers: [AuthService, AuthResolver, JwtStrategy, GqlAuthGuard],
  exports: [
    JwtModule
  ],
})
export class AuthModule { }
