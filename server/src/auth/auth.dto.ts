import { IsEmail, IsString } from "class-validator";
import { LoginInput, RegisterInput } from "src/graphql";

export class LoginInputDto extends LoginInput {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class RegisterInputDto extends RegisterInput {
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