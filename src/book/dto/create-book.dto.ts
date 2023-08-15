import { IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;
  @IsString()
  gender_id: string;
  @IsString()
  author_id: string;
  @IsString()
  language: string;
  @IsNumber()
  publication_year: number;
}
