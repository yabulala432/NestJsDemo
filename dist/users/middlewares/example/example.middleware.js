"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleMiddleware = void 0;
const common_1 = require("@nestjs/common");
let ExampleMiddleware = exports.ExampleMiddleware = class ExampleMiddleware {
    use(req, res, next) {
        console.log('response and request is found');
        const auth = req.headers.authorization;
        if (!auth) {
            throw new common_1.HttpException('no Authorization Token', common_1.HttpStatus.FORBIDDEN);
        }
        else if (auth === 'Yeabsira Yonas') {
            next();
        }
        else {
            throw new common_1.HttpException('Invalid Auth Token', common_1.HttpStatus.NON_AUTHORITATIVE_INFORMATION);
        }
    }
};
exports.ExampleMiddleware = ExampleMiddleware = __decorate([
    (0, common_1.Injectable)()
], ExampleMiddleware);
//# sourceMappingURL=example.middleware.js.map