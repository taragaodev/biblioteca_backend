import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { User } from './user/entities/user.entity';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}
  getAllBooks() {
    return this.prisma.book.findMany();
  }
  getCurrentUser(user: User) {
    return user;
  }
}
