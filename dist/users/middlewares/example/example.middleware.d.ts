import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
export declare class ExampleMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void;
}
