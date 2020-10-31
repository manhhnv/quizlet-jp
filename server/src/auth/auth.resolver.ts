import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserToken } from 'src/graphql';
import { LoginInputDto, RegisterInputDto } from './auth.dto';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) { }

  @Mutation(() => UserToken)
  login(@Args('input') input: LoginInputDto): Promise<UserToken> {
    return this.authService.login(input);
  }

  @Mutation(() => UserToken)
  async register(@Args('input') input: RegisterInputDto): Promise<UserToken> {
    return await this.authService.register(input);
  }
}

