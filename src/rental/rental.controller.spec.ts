import { Test, TestingModule } from '@nestjs/testing';
import { RentalController } from './rental.controller';
import { RentalService } from './rental.service';
import { RentBookDto } from './dto/rent-book.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/guard/roles.guard';
import { Reflector } from '@nestjs/core';
import { Role } from '@client';

describe('RentalController', () => {
  let controller: RentalController;
  let service: RentalService;

  const mockUserPayload = {
    userId: 'user-uuid-1',
    email: 'test@example.com',
    role: Role.STUDENT,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RentalController],
      providers: [
        {
          provide: RentalService,
          useValue: {
            rentBook: jest.fn(),
            returnBook: jest.fn(),
            findUserRentals: jest.fn(),
            findAllRentals: jest.fn(),
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

    controller = module.get<RentalController>(RentalController);
    service = module.get<RentalService>(RentalService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('rentBook', () => {
    it('should rent a book', async () => {
      const rentBookDto: RentBookDto = { bookId: 'book-uuid-1' };
      const mockResponse = { message: 'Book rented successfully', rental: { id: 'rental-uuid-1' } };
      (service.rentBook as jest.Mock).mockResolvedValue(mockResponse);

      const req = { user: mockUserPayload };
      expect(await controller.rentBook(req as any, rentBookDto)).toEqual(mockResponse);
      expect(service.rentBook).toHaveBeenCalledWith(mockUserPayload.userId, rentBookDto);
    });
  });

  describe('returnBook', () => {
    it('should return a book', async () => {
      const rentalId = 'rental-uuid-1';
      const mockResponse = { message: 'Book returned successfully', updatedRental: { id: rentalId } };
      (service.returnBook as jest.Mock).mockResolvedValue(mockResponse);

      const req = { user: mockUserPayload };
      expect(await controller.returnBook(req as any, rentalId)).toEqual(mockResponse);
      expect(service.returnBook).toHaveBeenCalledWith(mockUserPayload.userId, rentalId);
    });
  });

  describe('findUserRentals', () => {
    it('should return user rentals', async () => {
      const mockResponse = { message: 'User rentals retrieved successfully', rentals: [] };
      (service.findUserRentals as jest.Mock).mockResolvedValue(mockResponse);

      const req = { user: mockUserPayload };
      expect(await controller.findUserRentals(req as any)).toEqual(mockResponse);
      expect(service.findUserRentals).toHaveBeenCalledWith(mockUserPayload.userId);
    });
  });

  describe('findAllRentals', () => {
    it('should return all rentals', async () => {
      const mockResponse = [
        { id: 'rental-uuid-1', userId: 'user-uuid-1', bookId: 'book-uuid-1', status: 'RENTED' },
      ];
      (service.findAllRentals as jest.Mock).mockResolvedValue(mockResponse);

      expect(await controller.findAllRentals()).toEqual(mockResponse);
      expect(service.findAllRentals).toHaveBeenCalled();
    });
  });
});
