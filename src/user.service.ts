import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  public users = [
      {userLogin: 'Vasya'},
      {userLogin: 'Petya'},
  ];

  findAllUsers(): object {
    return this.users;
  }

  findUserById(id): object {
    return this.users[id];
  }

  createUser(user): string {
    this.users.push(user);
    return 'ok';
  }

}
