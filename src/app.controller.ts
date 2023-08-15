import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IsPublic } from './auth/decorators/is-public.decorator';
import { CurrentUser } from './auth/decorators/current-user.decorator';
import { User } from './user/entities/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @IsPublic()
  @Get()
  getBooks() {
    return this.appService.getAllBooks();
  }

  @Get('me')
  getMe(@CurrentUser() user: User) {
    return this.appService.getCurrentUser(user);
  }
}
