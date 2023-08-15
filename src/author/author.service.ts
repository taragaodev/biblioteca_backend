import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
// import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const data = {
      ...createAuthorDto,
    };
    const createdAuthor = await this.prisma.author.create({ data });

    return {
      ...createdAuthor,
    };
  }

  findAll() {
    return this.prisma.author.findMany();
  }

  findById(id: string) {
    return this.prisma.author.findUnique({
      where: {
        id,
      },
    });
  }

  // update(id: number, updateAuthorDto: UpdateAuthorDto) {
  //   return `This action updates a #${id} author`;
  // }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
