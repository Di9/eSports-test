import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User} from './user.interfaces';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  public users = [
      {userLogin: 'Vasya'},
      {userLogin: 'Petya'},
  ];

  async findAllUsers(): Promise<User[]> {
    console.log('request all users');
    return await this.userModel.find().exec();
  }

  findUserById(id): object {
    return this.users[id];
  }

  async createUser(createUserDto: CreateUserDto): Promise<User[]> {
    const createUser = new this.userModel(createUserDto);
    return await createUser.save();
  }

}
