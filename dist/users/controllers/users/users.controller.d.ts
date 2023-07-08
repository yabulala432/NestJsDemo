import { UsersService } from '../../services/users/users.service';
import { CreateUserType } from '../../../utils/CreateuserType';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(): {};
    createUser(userData: CreateUserType): void;
    getUserById(id: number): {
        id: string;
        name: string;
        email: string;
    }[];
}
