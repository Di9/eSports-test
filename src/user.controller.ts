import { Controller, UseGuards, UseInterceptors, CacheInterceptor, Get, Param, Post, Body} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
@UseGuards(AuthGuard('bearer'))
@UseInterceptors(CacheInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  allUsers(): object {
    return this.userService.findAllUsers();
  }

  @Get(':login')
  async userData(@Param('login') login): Promise<object> {

    return await this.userService.findUserByLogin(login);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    this.userService.createUser(createUserDto);
    return 'New user was created';
  }

}
