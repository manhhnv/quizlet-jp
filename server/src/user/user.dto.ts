import { IsEmail, IsString } from "class-validator";
import { LoginInput, NewUser } from "src/graphql";


export class LoginInputDto extends LoginInput {
  @IsString()
  @IsEmail()
  email: string;


  @IsString()
  password: string;
}

export class UserDto extends NewUser {
  @IsString()
  @IsEmail()
  email: string

  @IsString()
  password: string;

  @IsString()
  birthday: string

  @IsString()
  name: string;
}

export class UpdateUser {
  email: string
  password: string;
  birthday: string
  name: string;
}