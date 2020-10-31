import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { User, UserData } from '../graphql';
import { RegisterInputDto } from 'src/auth/auth.dto';

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

  async register(registerInput: RegisterInputDto, hashedPassword: string): Promise<User> {
    try {
      const users = await this.userRepository.find({});
      const user: User = {
        id: users.length,
        email: registerInput.email,
        password: hashedPassword,
        name: registerInput.name,
        birthday: registerInput.birthday,
        role: "User",
        createdAt: new Date(Date.now()).toISOString(),
        updatedAt: new Date(Date.now()).toISOString()
      };
      await this.userRepository.insert(user);
      return user;
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

  async findByEmail(email: string): Promise<User> {
    try {
      const user = await this.userRepository.findOne({ email: email });
      return user;
    } catch (error) {
      throw new HttpException(`Error ${error} `, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(user: User, update: UserData): Promise<User> {
    for (const property in update) {
      if (property == "id") {
        continue;
      }
      user[property] = update[property];
    }
    await this.userRepository.update({ id: user.id }, user);
    return user;
  }
}
