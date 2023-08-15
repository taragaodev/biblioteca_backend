import { Controller, Delete, Get, Param } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from 'src/user/entities/user.entity';

@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Get('add/:id')
  async addFavorite(@CurrentUser() user: User, @Param('id') id: string) {
    return this.favoriteService.addFavorite(user.id, id);
  }

  @Delete('remove/:id')
  async removeFavorite(@Param('id') id: string) {
    return this.favoriteService.removeFavorite(id);
  }

  @Get('find')
  async findFavorites() {
    return this.favoriteService.getFAvorites();
  }
}
