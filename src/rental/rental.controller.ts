import { Controller, Post, Body, Request, Get, Param, Patch } from '@nestjs/common';
import { RentalService } from './rental.service';
import { RentBookDto } from './dto/rent-book.dto';
import { Roles } from '../auth/decorator/roles.decorator';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { UserPayload } from 'src/user/interface/userpayload.interface';

@ApiTags('Rental')
@Controller('rental')
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  @ApiOperation({ summary: 'Rent a book' })
  @ApiBody({ type: RentBookDto })
  @ApiResponse({ status: 201, description: 'Book rented successfully.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @Post('rent')
  async rentBook(@Request() req: { user: UserPayload }, @Body() rentBookDto: RentBookDto) {
    return await this.rentalService.rentBook(req.user.id, rentBookDto);
  }

  @ApiOperation({ summary: 'Return a rented book' })
  @ApiParam({ name: 'rentalId', description: 'Rental ID' })
  @ApiResponse({ status: 200, description: 'Book returned successfully.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Rental record not found.' })
  @Patch('return/:rentalId')
  async returnBook(@Request() req: { user: UserPayload }, @Param('rentalId') rentalId: string) {
    return this.rentalService.returnBook(req.user.id, rentalId);
  }

  @ApiOperation({ summary: `Get current user's rental history` })
  @ApiResponse({ status: 200, description: 'User rentals retrieved successfully.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @Get('my-rentals')
  async findUserRentals(@Request() req: { user: UserPayload }) {
    return this.rentalService.findUserRentals(req.user.id);
  }

  @ApiOperation({ summary: 'Get all rental history (Admin only)' })
  @ApiResponse({ status: 200, description: 'All rentals retrieved successfully.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Roles('ADMIN')
  @Get('all-rentals')
  async findAllRentals() {
    return this.rentalService.findAllRentals();
  }
}
