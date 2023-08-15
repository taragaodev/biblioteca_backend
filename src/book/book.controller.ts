import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
// import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
// import { User } from 'src/user/entities/user.entity';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('add')
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @IsPublic()
  @Get('find')
  findAll() {
    return this.bookService.findAll();
  }

  @Get('find/:id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(id);
  }

  @Get('find/favorites')
  async findFavoriteBooks() {
    return this.bookService.findFavoriteBooks();
  }
}
