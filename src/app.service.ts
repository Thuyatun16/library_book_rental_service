import { Injectable } from '@nestjs/common';
import { UserService } from './user/user.service';
import { Role } from '@client';

@Injectable()
export class AppService {
  constructor(private userService: UserService) {}

  async seedAdmin() {
    const adminEmail = 'admin@gmail.com';
    const existingAdmin = await this.userService.findOneByEmail(adminEmail);

    if (existingAdmin) {
      return 'Admin user already created';
    }

    await this.userService.create({
      name: 'Admin',
      email: adminEmail,
      password: 'admin',
      role: Role.ADMIN,
    });

    return 'Admin user created successfully';
  }
}
