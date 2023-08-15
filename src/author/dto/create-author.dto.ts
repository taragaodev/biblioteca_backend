import { IsString } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  name: string;
  @IsString()
  nationality: string;
  @IsString()
  birth_date: string;
}
