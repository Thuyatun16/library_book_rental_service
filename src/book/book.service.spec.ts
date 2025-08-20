import { Test, TestingModule } from '@nestjs/testing';
import { BookService } from './book.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';

describe('BookService', () => {
  let service: BookService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookService,
        {
          provide: PrismaService,
          useValue: {
            book: {
              create: jest.fn(),
              findMany: jest.fn(),
              findUnique: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<BookService>(BookService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new book', async () => {
      const createBookDto = { title: 'Test Book', author: 'Test Author', quantity: 10 };
      const mockBook = { id: 'uuid-1', ...createBookDto, createdAt: new Date(), updatedAt: new Date() };
      (prismaService.book.create as jest.Mock).mockResolvedValue(mockBook);

      const result = await service.create(createBookDto);
      expect(prismaService.book.create).toHaveBeenCalledWith({ data: createBookDto });
      expect(result).toEqual({
        message: 'Book created successfully',
        data: mockBook,
      });
    });
  });

  describe('findAll', () => {
    it('should return an array of books', async () => {
      const mockBooks = [
        { id: 'uuid-1', title: 'Book 1', author: 'Author 1', quantity: 5, createdAt: new Date(), updatedAt: new Date() },
        { id: 'uuid-2', title: 'Book 2', author: 'Author 2', quantity: 3, createdAt: new Date(), updatedAt: new Date() },
      ];
      (prismaService.book.findMany as jest.Mock).mockResolvedValue(mockBooks);

      const result = await service.findAll();
      expect(prismaService.book.findMany).toHaveBeenCalled();
      expect(result).toEqual({
        message: 'Books fetched successfully',
        data: mockBooks,
      });
    });
  });

  describe('findOne', () => {
    it('should return a single book by ID', async () => {
      const mockBook = { id: 'uuid-1', title: 'Book 1', author: 'Author 1', quantity: 5, createdAt: new Date(), updatedAt: new Date() };
      (prismaService.book.findUnique as jest.Mock).mockResolvedValue(mockBook);

      const result = await service.findOne('uuid-1');
      expect(prismaService.book.findUnique).toHaveBeenCalledWith({ where: { id: 'uuid-1' } });
      expect(result).toEqual({
        message: 'Book fetched successfully',
        data: mockBook,
      });
    });

    it('should throw NotFoundException if book not found', async () => {
      (prismaService.book.findUnique as jest.Mock).mockResolvedValue(null);

      await expect(service.findOne('non-existent-uuid')).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a book by ID', async () => {
      const updateBookDto = { title: 'Updated Title', quantity: 8 };
      const mockUpdatedBook = { id: 'uuid-1', title: 'Updated Title', author: 'Test Author', quantity: 8, createdAt: new Date(), updatedAt: new Date() };
      (prismaService.book.update as jest.Mock).mockResolvedValue(mockUpdatedBook);

      const result = await service.update('uuid-1', updateBookDto);
      expect(prismaService.book.update).toHaveBeenCalledWith({
        where: { id: 'uuid-1' },
        data: updateBookDto,
      });
      expect(result).toEqual({
        message: 'Book updated successfully',
        data: mockUpdatedBook,
      });
    });
  });

  describe('remove', () => {
    it('should delete a book by ID', async () => {
      const mockDeletedBook = { id: 'uuid-1', title: 'Book 1', author: 'Author 1', quantity: 5, createdAt: new Date(), updatedAt: new Date() };
      (prismaService.book.delete as jest.Mock).mockResolvedValue(mockDeletedBook);

      const result = await service.remove('uuid-1');
      expect(prismaService.book.delete).toHaveBeenCalledWith({ where: { id: 'uuid-1' } });
      expect(result).toEqual({
        message: 'Book deleted successfully',
      });
    });
  });
});
