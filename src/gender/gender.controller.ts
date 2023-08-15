import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateGenderDto } from './dto/create-gender.dto';
// import { UpdateGenderDto } from './dto/update-gender.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { GenderService } from './gender.service';

@Controller('gender')
export class GenderController {
  constructor(private readonly genderService: GenderService) {}

  @Post('add')
  create(@Body() createGenderDto: CreateGenderDto) {
    return this.genderService.create(createGenderDto);
  }

  @IsPublic()
  @Get('find')
  findAll() {
    return this.genderService.findAll();
  }

  @Get('find/:id')
  findOne(@Param('id') id: string) {
    return this.genderService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateGenderDto: UpdateGenderDto) {
  //   return this.genderService.update(+id, updateGenderDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.genderService.remove(+id);
  // }
}
