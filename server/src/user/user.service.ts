import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { NewUser, User } from '../graphql';

import * as jwt from "jsonwebtoken";
import { SECRET } from 'src/config/config';
import { UpdateUser } from './user.dto';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) { }

  async users(): Promise<User[]> {
    const users = await this.userRepository.find({});
    users.forEach(user => user.password = "********");
    return users;
  }

  async register(newUser: NewUser): Promise<string> {
    try {
      const users = await this.userRepository.find({});
      const user = users.find(user => user.email === newUser.email);
      if (user) {
        return "hi";
      } else if (user === undefined) {
        const user: User = {
          id: users.length,
          email: newUser.email,
          password: newUser.password,
          name: newUser.name,
          birthday: newUser.birthday,
          role: "User",
          createdAt: new Date(Date.now()).toISOString(),
          updatedAt: new Date(Date.now()).toISOString()
        };
        await this.userRepository.insert(user);


        return await jwt.sign(user.id, SECRET);
      }
    } catch (error) {
      throw new HttpException(`Error ${error} `, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async login(email: string, password: string): Promise<string | undefined> {
    const user = await this.userRepository.findOne({ email: email });
    if (user && user.password === password) {
      return await jwt.sign(user.id, SECRET);
    }
    throw new HttpException("Unknown User", HttpStatus.NOT_FOUND);
  }

  async update(id: number, input: UpdateUser): Promise<string> {
    try {
      const user = await this.userRepository.findOne({ id: id });
      for (const index in input) {
        user[index] = input[index];
      }
      user.updatedAt = new Date(Date.now()).toISOString();
      await this.userRepository.update({ id: user.id }, user);
      return await jwt.sign(user.id, SECRET);
    } catch (error) {
      throw new HttpException(`Error ${error} `, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findById(id: number): Promise<User> {
    try {
      const user = await this.userRepository.findOne({ id: id });
      return user;
    } catch (error) {
      throw new HttpException(`Error ${error} `, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
