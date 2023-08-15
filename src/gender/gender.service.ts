import { Injectable } from '@nestjs/common';
import { CreateGenderDto } from './dto/create-gender.dto';
// import { UpdateGenderDto } from './dto/update-gender.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GenderService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createGenderDto: CreateGenderDto) {
    const data = {
      ...createGenderDto,
    };
    const createdGender = await this.prisma.gender.create({ data });

    return {
      ...createdGender,
    };
  }

  findAll() {
    return this.prisma.gender.findMany();
  }

  findOne(id: string) {
    return this.prisma.gender.findUnique({
      where: {
        id,
      },
    });
  }

  // update(id: number, updateGenderDto: UpdateGenderDto) {
  //   return `This action updates a #${id} gender`;
  // }

  remove(id: number) {
    return `This action removes a #${id} gender`;
  }
}
