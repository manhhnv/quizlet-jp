// import { IsEmail, IsString } from "class-validator";

export class UserDto {
  email: string
  password: string;
  birthday: Date
  name: string;
}
