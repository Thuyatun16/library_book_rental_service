import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async create(createBookDto: CreateBookDto) {
    const response = await this.prisma.book.create({ data: createBookDto });
    return {
      message: 'Book created successfully',
      data: response,
    };
  }

  async findAll() {
    const response = await this.prisma.book.findMany();
    return {
      message: 'Books fetched successfully',
      data: response,
    };
  }

  async findOne(id: string) {
    const response = await this.prisma.book.findUnique({ where: { id } });
    if (!response) {
      throw new NotFoundException('Book not found');
    }
    return {
      message: 'Book fetched successfully',
      data: response,
    };
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    const response = await this.prisma.book.update({
      where: { id },
      data: updateBookDto,
    });
    return {
      message: 'Book updated successfully',
      data: response,
    };
  }

  async remove(id: string) {
    await this.prisma.book.delete({ where: { id } });
    return {
      message: 'Book deleted successfully',
    };
  }
}
