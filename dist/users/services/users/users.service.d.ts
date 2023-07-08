import { CreateUserType } from '../../../utils/CreateuserType';
export declare class UsersService {
    private fakeUsers;
    fetchUsers(): {};
    createUsers(userDetails: CreateUserType): void;
    fetchUserById(id: number): {
        id: string;
        name: string;
        email: string;
    }[];
}
