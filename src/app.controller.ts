import { Controller, Get, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/decorator/public.decorator';
import { Roles } from './auth/decorator/roles.decorator';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Role } from '@client';
import { SkipThrottle } from '@nestjs/throttler';

interface UserPayload {
  userId: string;
  email: string;
  role: Role;
}

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({
    summary:
      'Run this endpoint to create admin. email: admin@gmail.com, password: admin',
  })
  @ApiResponse({
    status: 200,
    description: 'Admin user created successfully or already exists.',
  })
  @Public()
  @SkipThrottle()
  @Get('seed')
  async seed() {
    return this.appService.seedAdmin();
  }

  @ApiOperation({ summary: 'Get user profile (Authenticated users only)' })
  @ApiResponse({
    status: 200,
    description: 'User profile retrieved successfully.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @Get('profile')
  getProfile(@Request() req: { user: UserPayload }) {
    console.log(req.user, 'req.user');
    return req.user;
  }

  @ApiOperation({ summary: 'Get admin data (Admin only)' })
  @ApiResponse({
    status: 200,
    description: 'Admin data retrieved successfully.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Roles('ADMIN')
  @Get('admin')
  getAdmin(@Request() req: { user: UserPayload }) {
    return req.user;
  }
}
