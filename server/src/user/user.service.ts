import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
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
    users.forEach(user => user.password = "*");
    return users;
  }

  async register(registerInput: RegisterInputDto): Promise<User> {
    return await this.userRepository.save({ ...registerInput, role: "user" });
  }

  async findById(id: string): Promise<User> {
    const user = await this.userRepository.findOne({ id: id });
    user.password = "*";
    return user
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ email: email });
    return user;
  }

  async update(user: User, update: UserData): Promise<User> {
    Object.keys(update).forEach(property => {
      if (property != "id") {
        user[property] = update[property];
      }
    });

    await this.userRepository.update({ id: user.id }, user);
    return user;
  }
}
