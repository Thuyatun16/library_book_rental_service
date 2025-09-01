import { Module } from '@nestjs/common';
import { RentalController } from './rental.controller';
import { RentalService } from './rental.service';
import { PrismaModule } from '../prisma/prisma.module';
import { RentalValidationService } from './rental-validation.service';
import { RentalSnapshotService } from './rental-snapshot.service';


@Module({
  imports: [PrismaModule],
  controllers: [RentalController],
  providers: [RentalService, RentalValidationService, RentalSnapshotService],
})
export class RentalModule {}
