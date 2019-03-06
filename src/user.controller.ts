import { Controller, Get, Param, Post, Body} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  allUsers(): object {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  userData(@Param('id') id): object {
      return this.userService.findUserById(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    this.userService.createUser(createUserDto);
    return 'New user was created';
  }

}
