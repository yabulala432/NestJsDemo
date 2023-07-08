import { Injectable } from '@nestjs/common';
import { CreateUserType } from '../../../utils/CreateuserType';
import { CreateUserDto } from '../../dtos/CreateUser.dto';

@Injectable()
export class UsersService {
  private fakeUsers = [
    {
      id: '1',
      name: 'yeabsira  Yonas Asnake Tefera Feleke',
      email: 'yabulala432@gmail.com',
    },
    {
      id: '2',
      name: 'babula bere bela',
      email: 'obola432@gmail.com',
    },
    {
      id: '3',
      name: 'babula was my best friend',
      email: 'babula@gmail.com',
    },
  ];

  fetchUsers() {
    const fetchedData = {};
    this.fakeUsers.forEach((obj) => {
      const id = obj.id;
      const newObj = { name: obj.name, email: obj.email };
      fetchedData[id] = newObj;
    });
    return fetchedData;
  }

  createUsers(userDetails: CreateUserType) {
    // @ts-ignore
    this.fakeUsers.push(userDetails);
  }

  fetchUserById(id: number) {
    return this.fakeUsers.filter((obj) => {
      // @ts-ignore
      return obj.id == id;
    });
  }
}
