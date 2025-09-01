import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { User, Role } from '@client';
import { ResponseDto } from './dto/response.dto';
import { JwtPayload } from './interface/jwtPayload.interface';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    pass: string,
  ): Promise<Omit<User, 'password'> | null> {
    console.log('Validating user:', email);
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      console.log('User not found:', email);
      return null;
    }
    console.log('User found:', user.email);
    const isPasswordValid = await bcrypt.compare(pass, user.password);
    console.log('Password valid:', isPasswordValid);
    if (isPasswordValid) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async login(login: LoginDto): Promise<ResponseDto> {
    const user = await this.validateUser(login.email, login.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload: JwtPayload = {
      email: user.email,
      sub: user.id,
      role: user.role,
    };

    const token = this.jwtService.sign(payload);
    //console.log('Generated token:', token); // Log the token for debugging
    return {
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token: token,
    };
  }

  async register(registerDto: RegisterDto): Promise<ResponseDto> {
    if (registerDto.role === Role.ADMIN) {
      throw new BadRequestException('Cannot register as ADMIN role.');
    }
    const existingUser = await this.prisma.user.findUnique({
      where: { email: registerDto.email },
    });
    if (existingUser) {
      throw new BadRequestException('Email already registered.');
    }
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    const user = await this.prisma.user.create({
      data: {
        name: registerDto.name,
        email: registerDto.email,
        password: hashedPassword,
        role: registerDto.role,
      },
    });

    return {
      message: 'User registered successfully',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  }
}
