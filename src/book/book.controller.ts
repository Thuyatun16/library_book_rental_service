import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Roles } from '../auth/decorator/roles.decorator';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('Book')
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @ApiOperation({ summary: 'Create a new book (Admin only)' })
  @ApiBody({ type: CreateBookDto })
  @ApiResponse({ status: 201, description: 'Book created successfully.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Roles('ADMIN')
  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @ApiOperation({ summary: 'Get all books (Authenticated users only)' })
  @ApiResponse({ status: 200, description: 'Books retrieved successfully.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @ApiOperation({ summary: 'Get a book by ID (Authenticated users only)' })
  @ApiParam({ name: 'id', description: 'Book ID' })
  @ApiResponse({ status: 200, description: 'Book retrieved successfully.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Book not found.' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a book by ID (Admin only)' })
  @ApiParam({ name: 'id', description: 'Book ID' })
  @ApiBody({ type: UpdateBookDto })
  @ApiResponse({ status: 200, description: 'Book updated successfully.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Book not found.' })
  @Roles('ADMIN')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(id, updateBookDto);
  }

  @ApiOperation({ summary: 'Delete a book by ID (Admin only)' })
  @ApiParam({ name: 'id', description: 'Book ID' })
  @ApiResponse({ status: 200, description: 'Book deleted successfully.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Book not found.' })
  @Roles('ADMIN')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(id);
  }
}
