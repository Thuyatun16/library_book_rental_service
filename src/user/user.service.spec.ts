import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { NotFoundException } from '@nestjs/common';
import { Role } from '@client';

// Mock bcrypt.hash
jest.mock('bcrypt', () => ({
  hash: jest.fn(),
}));

describe('UserService', () => {
  let service: UserService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    jest.clearAllMocks(); // Clear mocks before each test
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              create: jest.fn(),
              findMany: jest.fn(),
              findUnique: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new user', async () => {
      const createUserDto = {
        name: 'Test User',
        email: 'test@example.com',
        password: 'plainPassword',
        role: Role.STUDENT,
      };
      const mockUser = {
        id: 'uuid-1',
        ...createUserDto,
        password: 'hashedPassword',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      (bcrypt.hash as jest.Mock).mockResolvedValue('hashedPassword');
      (prismaService.user.create as jest.Mock).mockResolvedValue(mockUser);

      const result = await service.create(createUserDto);
      expect(bcrypt.hash).toHaveBeenCalledWith(createUserDto.password, 10);
      expect(prismaService.user.create).toHaveBeenCalledWith({
        data: {
          name: createUserDto.name,
          email: createUserDto.email,
          password: 'hashedPassword',
          role: createUserDto.role,
        },
      });
      expect(result).toEqual(mockUser);
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const mockUsers = [
        {
          id: 'uuid-1',
          name: 'User 1',
          email: 'user1@example.com',
          role: Role.STUDENT,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'uuid-2',
          name: 'User 2',
          email: 'user2@example.com',
          role: Role.TEACHER,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      (prismaService.user.findMany as jest.Mock).mockResolvedValue(mockUsers);

      const result = await service.findAll();
      expect(prismaService.user.findMany).toHaveBeenCalled();
      expect(result).toEqual(mockUsers);
    });
  });

  describe('findOne', () => {
    it('should return a single user by ID', async () => {
      const mockUser = {
        id: 'uuid-1',
        name: 'User 1',
        email: 'user1@example.com',
        role: Role.STUDENT,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      (prismaService.user.findUnique as jest.Mock).mockResolvedValue(mockUser);

      const result = await service.findOne('uuid-1');
      expect(prismaService.user.findUnique).toHaveBeenCalledWith({
        where: { id: 'uuid-1' },
      });
      expect(result).toEqual(mockUser);
    });

    it('should throw NotFoundException if user not found', async () => {
      (prismaService.user.findUnique as jest.Mock).mockResolvedValue(null);

      await expect(service.findOne('non-existent-uuid')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('update', () => {
    it('should update a user by ID', async () => {
      const updateUserDto = {
        name: 'Updated Name',
        email: 'updated@example.com',
      };
      const mockUser = {
        id: 'uuid-1',
        name: 'User 1',
        email: 'user1@example.com',
        role: Role.STUDENT,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const mockUpdatedUser = { ...mockUser, ...updateUserDto };

      (prismaService.user.findUnique as jest.Mock).mockResolvedValue(mockUser); // User exists
      (prismaService.user.update as jest.Mock).mockResolvedValue(
        mockUpdatedUser,
      );

      const result = await service.update('uuid-1', updateUserDto);
      expect(prismaService.user.findUnique).toHaveBeenCalledWith({
        where: { id: 'uuid-1' },
      });
      expect(prismaService.user.update).toHaveBeenCalledWith({
        where: { id: 'uuid-1' },
        data: updateUserDto,
      });
      expect(result).toEqual(mockUpdatedUser);
    });

    it('should hash password if provided in update', async () => {
      const updateUserDto = { password: 'newPlainPassword' };
      const mockUser = {
        id: 'uuid-1',
        name: 'User 1',
        email: 'user1@example.com',
        role: Role.STUDENT,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const mockUpdatedUser = { ...mockUser, password: 'newHashedPassword' };

      (prismaService.user.findUnique as jest.Mock).mockResolvedValue(mockUser);
      (bcrypt.hash as jest.Mock).mockResolvedValue('newHashedPassword');
      (prismaService.user.update as jest.Mock).mockResolvedValue(
        mockUpdatedUser,
      );

      const result = await service.update('uuid-1', updateUserDto);
      expect(prismaService.user.update).toHaveBeenCalledWith({
        where: { id: 'uuid-1' },
        data: { ...updateUserDto, password: 'newHashedPassword' },
      });
      expect(result).toEqual(mockUpdatedUser);
    });

    it('should throw NotFoundException if user not found for update', async () => {
      (prismaService.user.findUnique as jest.Mock).mockResolvedValue(null);

      await expect(service.update('non-existent-uuid', {})).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('remove', () => {
    it('should delete a user by ID', async () => {
      const mockDeletedUser = {
        id: 'uuid-1',
        name: 'User 1',
        email: 'user1@example.com',
        role: Role.STUDENT,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      (prismaService.user.findUnique as jest.Mock).mockResolvedValue(
        mockDeletedUser,
      ); // User exists
      (prismaService.user.delete as jest.Mock).mockResolvedValue(
        mockDeletedUser,
      );

      const result = await service.remove('uuid-1');
      expect(prismaService.user.findUnique).toHaveBeenCalledWith({
        where: { id: 'uuid-1' },
      });
      expect(prismaService.user.delete).toHaveBeenCalledWith({
        where: { id: 'uuid-1' },
      });
      expect(result).toEqual(mockDeletedUser);
    });

    it('should throw NotFoundException if user not found for delete', async () => {
      (prismaService.user.findUnique as jest.Mock).mockResolvedValue(null);

      await expect(service.remove('non-existent-uuid')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('findOneByEmail', () => {
    it('should return a user by email', async () => {
      const mockUser = {
        id: 'uuid-1',
        name: 'User 1',
        email: 'user1@example.com',
        role: Role.STUDENT,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      (prismaService.user.findUnique as jest.Mock).mockResolvedValue(mockUser);

      const result = await service.findOneByEmail('user1@example.com');
      expect(prismaService.user.findUnique).toHaveBeenCalledWith({
        where: { email: 'user1@example.com' },
      });
      expect(result).toEqual(mockUser);
    });

    it('should throw NotFoundException if user not found by email', async () => {
      (prismaService.user.findUnique as jest.Mock).mockResolvedValue(null);

      const result = await service.findOneByEmail('nonexistent@example.com');
      expect(result).toBeNull();
    });
  });
});
