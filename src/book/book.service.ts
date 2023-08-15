import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
// import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBookDto: CreateBookDto) {
    const data = {
      ...createBookDto,
    };

    const createdBook = await this.prisma.book.create({
      data,
      include: {
        author: true,
        gender: true,
        favorites: true,
      },
    });
    return {
      ...createdBook,
    };
  }

  findAll() {
    return this.prisma.book.findMany({
      include: {
        author: true,
        gender: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.book.findUnique({
      where: {
        id,
      },
    });
  }

  async findFavoriteBooks() {
    return null;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
