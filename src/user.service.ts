import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User} from './user.interfaces';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findAllUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findUserByLogin(login): Promise<User[]> {
    return await this.userModel.findOne({ userLogin: login}).exec();
  }

  async createUser(createUserDto: CreateUserDto): Promise<User[]> {
    const createUser = new this.userModel(createUserDto);
    return await createUser.save();
  }

}
