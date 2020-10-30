import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from "../user/user.service";
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { User, UserToken } from 'src/graphql';
import { LoginInputDto, RegisterInputDto } from './auth.dto';
import { AuthHelper } from "./auth.helper";
import { JwoDto } from './jwt.dto';


@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwt: JwtService) { }

  private signToken(user: User): string {
    const payload: JwoDto = { userId: user.id };
    return this.jwt.sign(payload);
  }

  public async validateUser(userId: number) {
    return await this.userService.findById(userId);
  }

  async register(registerInput: RegisterInputDto): Promise<UserToken> {
    try {
      const user = await this.userService.findByEmail(registerInput.email);
      if (user) {
        throw new BadRequestException(`Error ${registerInput.email} is already exists`);
      } else {
        const hashedPassword = await AuthHelper.hash(registerInput.password);
        const user = await this.userService.register(registerInput, hashedPassword);
        return { user: user, token: this.signToken(user) };
      }
    } catch (error) {
      throw new HttpException(`Error ${error} `, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async login(loginInput: LoginInputDto): Promise<UserToken> {
    const user = await this.userService.findByEmail(loginInput.email);
    if (!user) {
      throw new NotFoundException(`Error ${loginInput.email} not found`);
    }

    const passwordValidate = await AuthHelper.validate(loginInput.password, user.password);
    if (!passwordValidate) {

    }

    return { user: user, token: this.signToken(user) };
  }

}