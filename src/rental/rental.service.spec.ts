import { Test, TestingModule } from '@nestjs/testing';
import { RentalService } from './rental.service';
import { PrismaService } from '../prisma/prisma.service';
import { RentalValidationService } from './rental-validation.service';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { RentalStatus } from '@client';

describe('RentalService', () => {
  let service: RentalService;
  let prismaService: PrismaService;
  let rentalValidationService: RentalValidationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RentalService,
        {
          provide: PrismaService,
          useValue: {
            book: {
              update: jest.fn(),
            },
            rental: {
              create: jest.fn(),
              findUnique: jest.fn(),
              findMany: jest.fn(),
              update: jest.fn(),
            },
          },
        },
        {
          provide: RentalValidationService,
          useValue: {
            validateBookAvailability: jest.fn(),
            validateRentalRecord: jest.fn(),
            validateUserAuthorization: jest.fn(),
            validateRentalStatus: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<RentalService>(RentalService);
    prismaService = module.get<PrismaService>(PrismaService);
    rentalValidationService = module.get<RentalValidationService>(
      RentalValidationService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('rentBook', () => {
    const userId = 'user-uuid-1';
    const rentBookDto = { bookId: 'book-uuid-1' };
    const mockBook = { id: 'book-uuid-1', quantity: 5 };
    const mockRental = {
      id: 'rental-uuid-1',
      userId,
      bookId: rentBookDto.bookId,
      status: RentalStatus.RENTED,
      rentedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    beforeEach(() => {
      (
        rentalValidationService.validateBookAvailability as jest.Mock
      ).mockResolvedValue(mockBook);
      (prismaService.rental.create as jest.Mock).mockResolvedValue(mockRental);
    });

    it('should successfully rent a book', async () => {
      const result = await service.rentBook(userId, rentBookDto);
      expect(
        rentalValidationService.validateBookAvailability,
      ).toHaveBeenCalledWith(rentBookDto.bookId);
      expect(prismaService.book.update).toHaveBeenCalledWith({
        where: { id: rentBookDto.bookId },
        data: { quantity: { decrement: 1 } },
      });
      expect(prismaService.rental.create).toHaveBeenCalledWith({
        data: {
          userId,
          bookId: rentBookDto.bookId,
          status: 'RENTED',
          rentedAt: expect.any(Date),
        },
      });
      expect(result).toEqual({
        message: 'Book rented successfully',
        rental: mockRental,
      });
    });

    it('should throw BadRequestException if book is not available', async () => {
      (
        rentalValidationService.validateBookAvailability as jest.Mock
      ).mockImplementation(() => {
        throw new BadRequestException('Book is not available for rent');
      });

      await expect(service.rentBook(userId, rentBookDto)).rejects.toThrow(
        BadRequestException,
      );
      await expect(service.rentBook(userId, rentBookDto)).rejects.toThrow(
        'Book is not available for rent',
      );
    });

    it('should throw NotFoundException if book not found', async () => {
      (
        rentalValidationService.validateBookAvailability as jest.Mock
      ).mockImplementation(() => {
        throw new NotFoundException('Book not found');
      });

      await expect(service.rentBook(userId, rentBookDto)).rejects.toThrow(
        NotFoundException,
      );
      await expect(service.rentBook(userId, rentBookDto)).rejects.toThrow(
        'Book not found',
      );
    });
  });

  describe('returnBook', () => {
    const userId = 'user-uuid-1';
    const rentalId = 'rental-uuid-1';
    const mockRental = {
      id: rentalId,
      userId,
      bookId: 'book-uuid-1',
      status: RentalStatus.RENTED,
      rentedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const mockUpdatedRental = {
      ...mockRental,
      status: RentalStatus.RETURNED,
      returnedAt: new Date(),
    };

    beforeEach(() => {
      (
        rentalValidationService.validateRentalRecord as jest.Mock
      ).mockResolvedValue(mockRental);
      (
        rentalValidationService.validateUserAuthorization as jest.Mock
      ).mockReturnValue(undefined);
      (
        rentalValidationService.validateRentalStatus as jest.Mock
      ).mockReturnValue(undefined);
      (prismaService.rental.update as jest.Mock).mockResolvedValue(
        mockUpdatedRental,
      );
    });

    it('should successfully return a book', async () => {
      const result = await service.returnBook(userId, rentalId);
      expect(rentalValidationService.validateRentalRecord).toHaveBeenCalledWith(
        rentalId,
      );
      expect(
        rentalValidationService.validateUserAuthorization,
      ).toHaveBeenCalledWith(mockRental.userId, userId);
      expect(rentalValidationService.validateRentalStatus).toHaveBeenCalledWith(
        mockRental.status,
      );
      expect(prismaService.book.update).toHaveBeenCalledWith({
        where: { id: mockRental.bookId },
        data: { quantity: { increment: 1 } },
      });
      expect(prismaService.rental.update).toHaveBeenCalledWith({
        where: { id: rentalId },
        data: {
          status: 'RETURNED',
          returnedAt: expect.any(Date),
        },
      });
      expect(result).toEqual({
        message: 'Book returned successfully',
        updatedRental: mockUpdatedRental,
      });
    });

    it('should throw NotFoundException if rental record not found', async () => {
      (
        rentalValidationService.validateRentalRecord as jest.Mock
      ).mockImplementation(() => {
        throw new NotFoundException('Rental record not found');
      });

      await expect(service.returnBook(userId, rentalId)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw BadRequestException if user is not authorized', async () => {
      (
        rentalValidationService.validateUserAuthorization as jest.Mock
      ).mockImplementation(() => {
        throw new BadRequestException(
          'You can only return your own rented books',
        );
      });

      await expect(service.returnBook(userId, rentalId)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should throw BadRequestException if book already returned', async () => {
      (
        rentalValidationService.validateRentalStatus as jest.Mock
      ).mockImplementation(() => {
        throw new BadRequestException('Book already returned');
      });

      await expect(service.returnBook(userId, rentalId)).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('findUserRentals', () => {
    const userId = 'user-uuid-1';
    const mockRentals = [
      {
        id: 'rental-uuid-1',
        userId,
        bookId: 'book-uuid-1',
        status: RentalStatus.RENTED,
        book: { title: 'Book 1' },
      },
    ];

    it(`should return user's rental history`, async () => {
      (prismaService.rental.findMany as jest.Mock).mockResolvedValue(
        mockRentals,
      );

      const result = await service.findUserRentals(userId);
      expect(prismaService.rental.findMany).toHaveBeenCalledWith({
        where: { userId },
        include: { book: true },
      });
      expect(result).toEqual({
        message: 'User rentals retrieved successfully',
        rentals: mockRentals,
      });
    });
  });

  describe('findAllRentals', () => {
    const mockRentals = [
      {
        id: 'rental-uuid-1',
        userId: 'user-uuid-1',
        bookId: 'book-uuid-1',
        status: RentalStatus.RENTED,
        user: {
          id: 'user-uuid-1',
          email: 'user1@example.com',
          name: 'User 1',
          role: 'STUDENT',
          createdAt: expect.any(Date),
          updatedAt: expect.any(Date),
        },
        book: { title: 'Book 1' },
      },
    ];

    it('should return all rental history', async () => {
      (prismaService.rental.findMany as jest.Mock).mockResolvedValue(
        mockRentals,
      );

      const result = await service.findAllRentals();
      expect(prismaService.rental.findMany).toHaveBeenCalledWith({
        include: {
          user: {
            select: {
              id: true,
              email: true,
              name: true,
              role: true,
              createdAt: true,
              updatedAt: true,
            },
          },
          book: true,
        },
      });
      expect(result).toEqual({
        message: 'All rentals retrieved successfully',
        rentals: mockRentals,
      });
    });
  });
});
