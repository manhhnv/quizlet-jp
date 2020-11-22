import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { GqlAuthGuard } from './auth.guard';
import { LoginInputDto, RegisterInputDto } from './auth.dto';
import { TokenGuard } from 'src/auth/token.guard';
import { UseGuards } from '@nestjs/common';
import { UserToken } from 'src/graphql';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) { }

  @Mutation(() => UserToken)
  login(@Args('input') input: LoginInputDto): Promise<UserToken> {
    return this.authService.login(input);
  }

  @Mutation(() => Boolean)
  @UseGuards(TokenGuard, GqlAuthGuard)
  logout(@Context() request): Promise<boolean> {
    const authHeader = request.headers.authorization;
    const token = authHeader.split(" ")[1];
    return this.authService.logout(token);
  }


  @Mutation(() => UserToken)
  async register(@Args('input') input: RegisterInputDto): Promise<UserToken> {
    return await this.authService.register(input);
  }

}

