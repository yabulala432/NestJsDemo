import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('response and request is found');
    const auth = req.headers.authorization;
    if (!auth) {
      throw new HttpException('no Authorization Token', HttpStatus.FORBIDDEN);
    } else if (auth === 'Yeabsira Yonas') {
      next();
    } else {
      throw new HttpException(
        'Invalid Auth Token',
        HttpStatus.NON_AUTHORITATIVE_INFORMATION,
      );
    }
  }
}
