import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { GenderModule } from './gender/gender.module';
import { FavoriteModule } from './favorite/favorite.module';
import { FavoriteService } from './favorite/favorite.service';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    AuthorModule,
    BookModule,
    GenderModule,
    FavoriteModule,
  ],
  controllers: [AppController],
  providers: [
    FavoriteService,
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  exports: [AppService],
})
export class AppModule {}
