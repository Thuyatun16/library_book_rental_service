import { Module } from '@nestjs/common';
import { RentalController } from './rental.controller';
import { RentalService } from './rental.service';
import { PrismaModule } from '../prisma/prisma.module';
import { RentalValidationService } from './rental-validation.service';

@Module({
  imports: [PrismaModule],
  controllers: [RentalController],
  providers: [RentalService, RentalValidationService],
})
export class RentalModule {}
