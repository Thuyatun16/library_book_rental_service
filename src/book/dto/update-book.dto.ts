import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @ApiProperty({ description: 'The title of the book' })
  title?: string;

  @ApiProperty({ description: 'The author of the book' })
  author?: string;

  @ApiProperty({ description: 'The quantity of the book available' })
  quantity?: number;
}
