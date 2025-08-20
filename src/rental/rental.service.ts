import { Injectable, HttpException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RentBookDto } from './dto/rent-book.dto';
import { RentalValidationService } from './rental-validation.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class RentalService {
  constructor(
    private prisma: PrismaService,
    private rentalValidationService: RentalValidationService,
  ) {}

  async rentBook(userId: string, rentBookDto: RentBookDto) {
    const { bookId } = rentBookDto;
    try {
      await this.rentalValidationService.validateBookAvailability(bookId);
      await this.prisma.book.update({
        where: { id: bookId },
        data: { quantity: { decrement: 1 } },
      });
      const rental = await this.prisma.rental.create({
        data: {
          userId,
          bookId,
          status: 'RENTED',
          rentedAt: new Date(),
        },
      });
      return {
        message: 'Book rented successfully',
        rental,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      } else if (error instanceof PrismaClientKnownRequestError) {
        throw new InternalServerErrorException(error.message);
      } else if (error instanceof Error) {
        throw new InternalServerErrorException(error.message);
      } else {
        throw new InternalServerErrorException('An unknown error occurred');
      }
    }
  }

  async returnBook(userId: string, rentalId: string) {
    try {
      const rental =
        await this.rentalValidationService.validateRentalRecord(rentalId);
      this.rentalValidationService.validateUserAuthorization(
        rental.userId,
        userId,
      );
      this.rentalValidationService.validateRentalStatus(rental.status);
      await this.prisma.book.update({
        where: { id: rental.bookId },
        data: { quantity: { increment: 1 } },
      });
      const updatedRental = await this.prisma.rental.update({
        where: { id: rentalId },
        data: {
          status: 'RETURNED',
          returnedAt: new Date(),
        },
      });

      return {
        message: 'Book returned successfully',
        updatedRental,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      } else if (error instanceof PrismaClientKnownRequestError) {
        throw new InternalServerErrorException(error.message);
      } else if (error instanceof Error) {
        throw new InternalServerErrorException(error.message);
      } else {
        throw new InternalServerErrorException('An unknown error occurred');
      }
    }
  }

  async findUserRentals(userId: string) {
    try {
      const rentals = await this.prisma.rental.findMany({
        where: { userId },
        include: { book: true },
      });
      return {
        message: 'User rentals retrieved successfully',
        rentals,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      } else if (error instanceof PrismaClientKnownRequestError) {
        throw new InternalServerErrorException(error.message);
      } else if (error instanceof Error) {
        throw new InternalServerErrorException(error.message);
      } else {
        throw new InternalServerErrorException('An unknown error occurred');
      }
    }
  }

  async findAllRentals() {
    try {
      const rentals = await this.prisma.rental.findMany({
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
      return {
        message: 'All rentals retrieved successfully',
        rentals,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      } else if (error instanceof PrismaClientKnownRequestError) {
        throw new InternalServerErrorException(error.message);
      } else if (error instanceof Error) {
        throw new InternalServerErrorException(error.message);
      } else {
        throw new InternalServerErrorException('An unknown error occurred');
      }
    }
  }
}
