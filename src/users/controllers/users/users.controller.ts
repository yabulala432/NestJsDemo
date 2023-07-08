import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from '../../dtos/CreateUser.dto';
import { UsersService } from '../../services/users/users.service';
import { CreateUserType } from '../../../utils/CreateuserType';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('')
  getUsers() {
    return this.usersService.fetchUsers();
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserType) {
    return this.usersService.createUsers(userData);
  }

  @Get(':id')
  @UsePipes(new ValidationPipe())
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id, ' is the id\n');
    return this.usersService.fetchUserById(id);
  }
}
