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
      const insertUser = {
        email: registerInput.email,
        password: hashedPassword,
        name: registerInput.name,
        birthday: registerInput.birthday,
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      const result = await this.userRepository.insert(insertUser);
      const user = { ...insertUser, id: result.identifiers[0].id as string };
      return user;
    } catch (error) {
      throw new HttpException(`Error ${error} `, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findById(id: string): Promise<User> {
    try {
      const user = await this.userRepository.findOne({ id: id });
      return user as User;
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
    Object.keys(update).forEach(property => {
      if (property != "id") {
        user[property] = update[property];
      }
    });

    user.updatedAt = new Date();
    await this.userRepository.update({ id: user.id }, user);
    return user;
  }
}
