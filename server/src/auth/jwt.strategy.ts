import { AuthService } from "./auth.service";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwoDto } from './jwt.dto';
import { PassportStrategy } from '@nestjs/passport';
import { SECRET } from "../options/config/config";
import { User } from 'src/graphql';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiredTokens: true,
      secretOrKey: SECRET,
    });
  }

  async validate(payload: JwoDto): Promise<User> {
    const user = await this.authService.validateUser(payload.userId);
    if (!user) {
      throw new UnauthorizedException('Token not valid');
    }
    return user;
  }
}

