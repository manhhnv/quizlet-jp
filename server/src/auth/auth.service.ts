import { BadRequestException, ForbiddenException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from "../user/user.service";
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { User, UserToken } from 'src/graphql';
import { LoginInputDto, RegisterInputDto } from './auth.dto';
import { AuthHelper } from "./auth.helper";
import { InjectRepository } from '@nestjs/typeorm';
import { TokenEntity } from './token/token.entity';
import { Repository } from 'typeorm';
import { JwoDto } from './jwt.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwt: JwtService,
    @InjectRepository(TokenEntity)
    private tokenRepository: Repository<TokenEntity>
  ) { }

  private signToken(user: User): string {
    const payload: JwoDto = { userId: user.id };
    return this.jwt.sign(payload);
  }

  public async validateUser(userId: string) {
    return await this.userService.findById(userId);
  }

  async findToken(token: string): Promise<boolean> {
    const check = await this.tokenRepository.find({ token: token });
    return check ? true : false;
  }

  async decodeToken(token: string): Promise<JwoDto> {
    const a = this.jwt.decode(token);
    console.log(a);
    return { userId: "abc" };
  }

  async register(registerInput: RegisterInputDto): Promise<UserToken> {
    try {
      const user = await this.userService.findByEmail(registerInput.email);
      if (user) {
        throw new BadRequestException(`Error ${registerInput.email} is already exists`);
      } else {
        const hashedPassword = await AuthHelper.hash(registerInput.password);
        registerInput.password = hashedPassword;
        const user = await this.userService.register(registerInput);
        const token = this.signToken(user);
        await this.tokenRepository.save({ token: token, user: user });
        return { user: user, token: token };
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
      throw new ForbiddenException('Wrong password');
    }

    const token = this.signToken(user);

    await this.tokenRepository.save({ token: token, user: user });
    return { user: user, token: token };
  }

  async logout(token: string): Promise<boolean> {
    this.tokenRepository.softDelete({ token: token });
    return true;
  }

}