import { compare, hash } from "bcryptjs";

export class AuthHelper {
  static validate(inputPassword: string, password: string): Promise<boolean> {
    return compare(inputPassword, password);
  }
  static hash(password: string): Promise<string> {
    return hash(password, 10);
  }
} 