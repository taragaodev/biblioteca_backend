import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FavoriteService {
  constructor(private readonly prisma: PrismaService) {}

  async addFavorite(user_id: string, book_id: string) {
    const favoriteBook = await this.prisma.favoriteBook.create({
      data: {
        book_id: book_id,
        user_id: user_id,
      },
      include: {
        book: true,
        user: true,
      },
    });
    await this.prisma.book.update({
      data: {
        favorite: true,
      },
      where: {
        id: book_id,
      },
    });

    return {
      ...favoriteBook,
    };
  }

  async removeFavorite(id: string) {
    const favorites = await this.prisma.favoriteBook.findMany();
    await this.prisma.favoriteBook.delete({
      where: {
        id,
      },
    });
    return {
      ...favorites,
    };
  }

  async getFAvorites() {
    return await this.prisma.favoriteBook.findMany({
      include: {
        book: true,
        user: true,
      },
    });
  }
}
