import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UnauthorizedException, BadRequestException } from '@nestjs/common';
import { Role } from '@client';

// Mock bcrypt.compare and bcrypt.hash
jest.mock('bcrypt', () => ({
  compare: jest.fn(),
  hash: jest.fn(),
}));

describe('AuthService', () => {
  let service: AuthService;
  let prismaService: PrismaService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              findUnique: jest.fn(),
              create: jest.fn(),
            },
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prismaService = module.get<PrismaService>(PrismaService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('validateUser', () => {
    const mockUser = {
      id: 'some-uuid',
      email: 'test@example.com',
      password: 'hashedPassword',
      name: 'Test User',
      role: Role.STUDENT,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    it('should return user (without password) if credentials are valid', async () => {
      (prismaService.user.findUnique as jest.Mock).mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);

      const result = await service.validateUser(
        'test@example.com',
        'plainPassword',
      );
      expect(result).toEqual(
        expect.objectContaining({ email: 'test@example.com' }),
      );
      expect(result).not.toHaveProperty('password');
    });

    it('should return null if user not found', async () => {
      (prismaService.user.findUnique as jest.Mock).mockResolvedValue(null);

      const result = await service.validateUser(
        'nonexistent@example.com',
        'password',
      );
      expect(result).toBeNull();
    });

    it('should return null if password is invalid', async () => {
      jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(mockUser);
      jest.spyOn(bcrypt, 'compare').mockResolvedValue(false);

      const result = await service.validateUser(
        'test@example.com',
        'wrongPassword',
      );
      expect(result).toBeNull();
    });
  });

  describe('login', () => {
    const mockUserWithoutPassword = {
      id: 'some-uuid',
      email: 'test@example.com',
      name: 'Test User',
      role: Role.STUDENT,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const mockLoginDto = {
      email: 'test@example.com',
      password: 'plainPassword',
    };
    const mockAccessToken = 'mockAccessToken';

    beforeEach(() => {
      jest
        .spyOn(service, 'validateUser')
        .mockResolvedValue(mockUserWithoutPassword);
      (jwtService.sign as jest.Mock).mockReturnValue(mockAccessToken);
    });

    it('should return access token and user data on successful login', async () => {
      const result = await service.login(mockLoginDto);
      expect(service.validateUser).toHaveBeenCalledWith(
        mockLoginDto.email,
        mockLoginDto.password,
      );
      expect(jwtService.sign).toHaveBeenCalledWith({
        email: mockUserWithoutPassword.email,
        sub: mockUserWithoutPassword.id,
        role: mockUserWithoutPassword.role,
      });
      expect(result).toEqual({
        message: 'Login successful',
        user: {
          id: mockUserWithoutPassword.id,
          name: mockUserWithoutPassword.name,
          email: mockUserWithoutPassword.email,
          role: mockUserWithoutPassword.role,
        },
        token: mockAccessToken,
      });
    });

    it('should throw UnauthorizedException if validateUser returns null', async () => {
      jest.spyOn(service, 'validateUser').mockResolvedValue(null);

      await expect(service.login(mockLoginDto)).rejects.toThrow(
        UnauthorizedException,
      );
      await expect(service.login(mockLoginDto)).rejects.toThrow(
        'Invalid credentials',
      );
    });
  });

  describe('register', () => {
    const mockRegisterDto = {
      name: 'New User',
      email: 'new@example.com',
      password: 'newPassword',
      role: Role.STUDENT,
    };
    const mockCreatedUser = {
      id: 'new-uuid',
      ...mockRegisterDto,
      password: 'hashedNewPassword',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    beforeEach(() => {
      (bcrypt.hash as jest.Mock).mockResolvedValue('hashedNewPassword');
      (prismaService.user.findUnique as jest.Mock).mockResolvedValue(null); // No existing user
      (prismaService.user.create as jest.Mock).mockResolvedValue(
        mockCreatedUser,
      );
    });

    it('should create and return a new user', async () => {
      const result = await service.register(mockRegisterDto);
      expect(bcrypt.hash).toHaveBeenCalledWith(mockRegisterDto.password, 10);
      expect(prismaService.user.create).toHaveBeenCalledWith({
        data: {
          name: mockRegisterDto.name,
          email: mockRegisterDto.email,
          password: 'hashedNewPassword',
          role: mockRegisterDto.role,
        },
      });
      expect(result).toEqual({
        message: 'User registered successfully',
        user: {
          id: mockCreatedUser.id,
          name: mockCreatedUser.name,
          email: mockCreatedUser.email,
          role: mockCreatedUser.role,
        },
      });
    });

    it('should throw BadRequestException if role is ADMIN', async () => {
      const adminRegisterDto = { ...mockRegisterDto, role: Role.ADMIN };
      await expect(service.register(adminRegisterDto)).rejects.toThrow(
        BadRequestException,
      );
      await expect(service.register(adminRegisterDto)).rejects.toThrow(
        'Cannot register as ADMIN role.',
      );
    });

    it('should throw BadRequestException if email already registered', async () => {
      jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(
        mockCreatedUser,
      ); // User already exists

      await expect(service.register(mockRegisterDto)).rejects.toThrow(
        BadRequestException,
      );
      await expect(service.register(mockRegisterDto)).rejects.toThrow(
        'Email already registered.',
      );
    });
  });
});
