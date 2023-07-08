import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/controllers/users/users.controller';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
