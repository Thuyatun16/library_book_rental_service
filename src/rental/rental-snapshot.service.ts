import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { PrismaService } from '../prisma/prisma.service';
import { BookRentedEvent } from '../events/dto/book-rented.event';

@Injectable()
export class RentalSnapshotService {
  constructor(private prisma: PrismaService) {}

  @OnEvent('book.rented')
  async handleBookRentedEvent(payload: BookRentedEvent) {
    const { bookId, userId, rentedAt } = payload;
    const book = await this.prisma.book.findUnique({ where: { id: bookId } });

    if (book) {
      await this.prisma.rentalSnapshot.create({
        data: {
          bookId,
          userId,
          rentedAt,
          availability: book.quantity,
        },
      });
    }
  }
}
