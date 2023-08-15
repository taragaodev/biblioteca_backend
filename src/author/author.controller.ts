import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
// import { UpdateAuthorDto } from './dto/update-author.dto';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post('add')
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDto);
  }

  @IsPublic()
  @Get('find')
  findAll() {
    // const name = params.name;
    // return this.authorService.findByName(name);
    return this.authorService.findAll();
  }

  @Get('find/:id')
  findOne(@Param('id') id: string) {
    return this.authorService.findById(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
  //   return this.authorService.update(+id, updateAuthorDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authorService.remove(+id);
  // }
}
