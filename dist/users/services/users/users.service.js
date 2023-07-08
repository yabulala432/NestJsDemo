"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = exports.UsersService = class UsersService {
    constructor() {
        this.fakeUsers = [
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
    }
    fetchUsers() {
        const fetchedData = {};
        this.fakeUsers.forEach((obj) => {
            const id = obj.id;
            const newObj = { name: obj.name, email: obj.email };
            fetchedData[id] = newObj;
        });
        return fetchedData;
    }
    createUsers(userDetails) {
        this.fakeUsers.push(userDetails);
    }
    fetchUserById(id) {
        return this.fakeUsers.filter((obj) => {
            return obj.id == id;
        });
    }
};
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map