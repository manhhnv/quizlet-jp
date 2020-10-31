import { IsEmail, IsString } from "class-validator";

export class UDto {
  email: string
  password: string;
  birthday: string
  name: string;
}
