import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { SECRET } from 'src/config/config';
import * as jwt from "jsonwebtoken";
import { User } from 'src/graphql';

@Injectable()
export class UserGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext();
    if (!ctx.headers.authorization) {
      return false;
    }
    ctx.userId = await this.validateUser(ctx.headers.authorization);
    return true;
  }


  async validateUser(authorization: string): Promise<User> {
    if (authorization.split(' ')[0] !== "Bearer") {
      throw new HttpException("Invalid token check", HttpStatus.UNAUTHORIZED);
    }

    const token = authorization.split(' ')[1];

    try {
      return await jwt.verify(token, SECRET);
    } catch (err) {
      throw new HttpException("Invalid token (err)", HttpStatus.UNAUTHORIZED);
    }
  }
}
