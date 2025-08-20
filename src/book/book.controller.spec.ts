import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/guard/roles.guard';
import { Reflector } from '@nestjs/core';

describe('BookController', () => {
  let controller: BookController;
  let service: BookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [
        {
          provide: BookService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
        Reflector, // Provide Reflector for RolesGuard
      ],
    })
      .overrideGuard(AuthGuard('jwt'))
      .useValue({ canActivate: () => true })
      .overrideGuard(RolesGuard)
      .useValue({ canActivate: () => true })
      .compile();

    controller = module.get<BookController>(BookController);
    service = module.get<BookService>(BookService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a book', async () => {
      const createBookDto: CreateBookDto = { title: 'Test Book', author: 'Test Author', quantity: 10 };
      const mockBook = { id: 'uuid-1', ...createBookDto, createdAt: new Date(), updatedAt: new Date() };
      (service.create as jest.Mock).mockResolvedValue(mockBook);

      expect(await controller.create(createBookDto)).toEqual(mockBook);
      expect(service.create).toHaveBeenCalledWith(createBookDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of books', async () => {
      const mockBooks = [
        { id: 'uuid-1', title: 'Book 1', author: 'Author 1', quantity: 5, createdAt: new Date(), updatedAt: new Date() },
      ];
      (service.findAll as jest.Mock).mockResolvedValue(mockBooks);

      expect(await controller.findAll()).toEqual(mockBooks);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single book', async () => {
      const mockBook = { id: 'uuid-1', title: 'Book 1', author: 'Author 1', quantity: 5, createdAt: new Date(), updatedAt: new Date() };
      (service.findOne as jest.Mock).mockResolvedValue(mockBook);

      expect(await controller.findOne('uuid-1')).toEqual(mockBook);
      expect(service.findOne).toHaveBeenCalledWith('uuid-1');
    });
  });

  describe('update', () => {
    it('should update a book', async () => {
      const updateBookDto: UpdateBookDto = { title: 'Updated Title' };
      const mockBook = { id: 'uuid-1', title: 'Updated Title', author: 'Test Author', quantity: 10, createdAt: new Date(), updatedAt: new Date() };
      (service.update as jest.Mock).mockResolvedValue(mockBook);

      expect(await controller.update('uuid-1', updateBookDto)).toEqual(mockBook);
      expect(service.update).toHaveBeenCalledWith('uuid-1', updateBookDto);
    });
  });

  describe('remove', () => {
    it('should remove a book', async () => {
      const mockBook = { id: 'uuid-1', title: 'Book 1', author: 'Author 1', quantity: 5, createdAt: new Date(), updatedAt: new Date() };
      (service.remove as jest.Mock).mockResolvedValue(mockBook);

      expect(await controller.remove('uuid-1')).toEqual(mockBook);
      expect(service.remove).toHaveBeenCalledWith('uuid-1');
    });
  });
});
