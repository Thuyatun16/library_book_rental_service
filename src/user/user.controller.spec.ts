import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/guard/roles.guard';
import { Reflector } from '@nestjs/core';
import { Role } from '@client';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
        Reflector, // Provide Reflector for RolesGuard
      ],
    })
      .overrideGuard(AuthGuard('jwt'))
      .useValue({ canActivate: () => true })
      .overrideGuard(RolesGuard)
      .useValue({ canActivate: () => true })
      .compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a user', async () => {
      const createUserDto: CreateUserDto = {
        name: 'Test User',
        email: 'test@example.com',
        password: 'password',
        role: Role.STUDENT,
      };
      const mockUser = { id: 'uuid-1', ...createUserDto, createdAt: new Date(), updatedAt: new Date() };
      (service.create as jest.Mock).mockResolvedValue(mockUser);

      expect(await controller.create(createUserDto)).toEqual(mockUser);
      expect(service.create).toHaveBeenCalledWith(createUserDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const mockUsers = [
        { id: 'uuid-1', name: 'User 1', email: 'user1@example.com', role: Role.STUDENT, createdAt: new Date(), updatedAt: new Date() },
      ];
      (service.findAll as jest.Mock).mockResolvedValue(mockUsers);

      expect(await controller.findAll()).toEqual(mockUsers);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single user', async () => {
      const mockUser = { id: 'uuid-1', name: 'User 1', email: 'user1@example.com', role: Role.STUDENT, createdAt: new Date(), updatedAt: new Date() };
      (service.findOne as jest.Mock).mockResolvedValue(mockUser);

      expect(await controller.findOne('uuid-1')).toEqual(mockUser);
      expect(service.findOne).toHaveBeenCalledWith('uuid-1');
    });
  });

  describe('update', () => {
    it('should update a user', async () => {
      const updateUserDto: UpdateUserDto = { name: 'Updated Name' };
      const mockUser = { id: 'uuid-1', name: 'User 1', email: 'user1@example.com', role: Role.STUDENT, createdAt: new Date(), updatedAt: new Date() };
      (service.update as jest.Mock).mockResolvedValue(mockUser);

      expect(await controller.update('uuid-1', updateUserDto)).toEqual(mockUser);
      expect(service.update).toHaveBeenCalledWith('uuid-1', updateUserDto);
    });
  });

  describe('remove', () => {
    it('should remove a user', async () => {
      const mockUser = { id: 'uuid-1', name: 'User 1', email: 'user1@example.com', role: Role.STUDENT, createdAt: new Date(), updatedAt: new Date() };
      (service.remove as jest.Mock).mockResolvedValue(mockUser);

      expect(await controller.remove('uuid-1')).toEqual(mockUser);
      expect(service.remove).toHaveBeenCalledWith('uuid-1');
    });
  });
});
