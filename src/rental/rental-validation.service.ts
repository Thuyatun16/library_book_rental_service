import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RentalStatus } from '@client';

@Injectable()
export class RentalValidationService {
  constructor(private prisma: PrismaService) {}

  async validateBookAvailability(bookId: string) {
    const book = await this.prisma.book.findUnique({ where: { id: bookId } });

    if (!book) {
      throw new NotFoundException('Book not found');
    }

    if (book.quantity <= 0) {
      throw new BadRequestException('Book is not available for rent');
    }
    return book;
  }

  async validateRentalRecord(rentalId: string) {
    const rental = await this.prisma.rental.findUnique({
      where: { id: rentalId },
    });

    if (!rental) {
      throw new NotFoundException('Rental record not found');
    }
    return rental;
  }

  validateUserAuthorization(rentalUserId: string, currentUserId: string) {
    if (rentalUserId !== currentUserId) {
      throw new BadRequestException('You can only return your own rented books');
    }
  }

  validateRentalStatus(rentalStatus: RentalStatus) {
    if (rentalStatus === RentalStatus.RETURNED) {
      throw new BadRequestException('Book already returned');
    }
  }
}
