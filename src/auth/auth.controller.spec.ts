import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UnauthorizedException, BadRequestException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Role } from '@client';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            login: jest.fn(),
            register: jest.fn(),
          },
        },
      ],
    })
      .overrideGuard(AuthGuard('local'))
      .useValue({ canActivate: () => true })
      .compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('login', () => {
    const mockLoginDto: LoginDto = {
      email: 'test@example.com',
      password: 'password',
    };
    const mockResponse = {
      message: 'Login successful',
      user: { id: 'user-id', name: 'Test User', email: 'test@example.com', role: Role.STUDENT },
      token: 'mockToken',
    };

    it('should return login response on successful login', async () => {
      (authService.login as jest.Mock).mockResolvedValue(mockResponse);

      const result = await controller.login(mockLoginDto);
      expect(authService.login).toHaveBeenCalledWith(mockLoginDto);
      expect(result).toEqual(mockResponse);
    });

    it('should throw UnauthorizedException on failed login', async () => {
      (authService.login as jest.Mock).mockImplementation(() => {
        throw new UnauthorizedException();
      });

      await expect(controller.login(mockLoginDto)).rejects.toThrow(UnauthorizedException);
    });
  });

  describe('register', () => {
    const mockRegisterDto: RegisterDto = {
      name: 'New User',
      email: 'new@example.com',
      password: 'newPassword',
      role: Role.STUDENT,
    };
    const mockResponse = {
      message: 'User registered successfully',
      user: { id: 'user-id', name: 'New User', email: 'new@example.com', role: Role.STUDENT },
    };

    it('should return registration response on successful registration', async () => {
      (authService.register as jest.Mock).mockResolvedValue(mockResponse);

      const result = await controller.register(mockRegisterDto);
      expect(authService.register).toHaveBeenCalledWith(mockRegisterDto);
      expect(result).toEqual(mockResponse);
    });

    it('should throw BadRequestException on failed registration', async () => {
      (authService.register as jest.Mock).mockImplementation(() => {
        throw new BadRequestException();
      });

      await expect(controller.register(mockRegisterDto)).rejects.toThrow(BadRequestException);
    });
  });
});
