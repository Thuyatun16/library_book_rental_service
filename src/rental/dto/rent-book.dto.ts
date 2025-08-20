import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RentBookDto {
  @ApiProperty({ description: 'The ID of the book to rent' })
  @IsNotEmpty()
  @IsString()
  bookId: string;
}
