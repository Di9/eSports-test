import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findAllUsers(): object {
    return ['Vasya', 'Petya'];
  }
}
