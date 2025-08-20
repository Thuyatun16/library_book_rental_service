import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, HttpStatus } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { PrismaService } from './../src/prisma/prisma.service';
import { Role } from 'generated/prisma';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { LoginDto } from 'src/auth/dto/login.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { Reflector } from '@nestjs/core';
import { CreateBookDto } from 'src/book/dto/create-book.dto';
import { UpdateBookDto } from 'src/book/dto/update-book.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { RentBookDto } from 'src/rental/dto/rent-book.dto';

jest.setTimeout(30000);

describe('App E2E Tests', () => {
  let app: INestApplication;
  let prismaService: PrismaService;
  let adminToken: string;
  let studentToken: string;
  let teacherToken: string;
  let adminUserId: string;
  let studentUserId: string;
  let teacherUserId: string;
  let testBookId: string;
  let testRentalId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    
    // Apply global guards to the test app
    const reflector = app.get(Reflector);
    app.useGlobalGuards(new JwtAuthGuard(reflector), new RolesGuard(reflector));
    
    await app.init();
    await app.listen(0); // Listen on a random available port

    prismaService = app.get<PrismaService>(PrismaService);

    // Clear database before tests
    await prismaService.$transaction([
      prismaService.rental.deleteMany(),
      prismaService.book.deleteMany(),
      prismaService.user.deleteMany(),
    ]);

    // Seed admin user
    await request(app.getHttpServer()).get('/seed').expect(HttpStatus.OK);

    // Register a student user
    await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        name: 'Test Student',
        email: 'student@example.com',
        password: 'password',
        role: Role.STUDENT,
      } as RegisterDto)
      .expect(HttpStatus.CREATED);

    // Register a teacher user
    await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        name: 'Test Teacher',
        email: 'teacher@example.com',
        password: 'password',
        role: Role.TEACHER,
      } as RegisterDto)
      .expect(HttpStatus.CREATED);

    // Login as admin to get token
    const adminLoginResponse = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'admin@gmail.com', password: 'admin' } as LoginDto)
      .expect(HttpStatus.OK);
    adminToken = adminLoginResponse.body.token;
    adminUserId = adminLoginResponse.body.user.id;

    // Login as student to get token
    const studentLoginResponse = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'student@example.com', password: 'password' } as LoginDto)
      .expect(HttpStatus.OK);
    studentToken = studentLoginResponse.body.token;
    studentUserId = studentLoginResponse.body.user.id;

    // Login as teacher to get token
    const teacherLoginResponse = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'teacher@example.com', password: 'password' } as LoginDto)
      .expect(HttpStatus.OK);
    teacherToken = teacherLoginResponse.body.token;
    teacherUserId = teacherLoginResponse.body.user.id;
  }, 30000);

  afterAll(async () => {
    // Clear database after tests
    await prismaService.$transaction([
      prismaService.rental.deleteMany(),
      prismaService.book.deleteMany(),
      prismaService.user.deleteMany(),
    ]);
    await app.close();
  });

  describe('Admin Seed', () => {
    it('/seed (GET) - should create admin user', async () => {
      const response = await request(app.getHttpServer())
        .get('/seed')
        .expect(HttpStatus.OK);
      expect(response.text).toContain('Admin user already created');
    });
  });

  describe('Auth Flow', () => {
    it('/auth/register (POST) - should register a new user', async () => {
      const response = await request(app.getHttpServer())
        .post('/auth/register')
        .send({
          name: 'Another User',
          email: 'another@example.com',
          password: 'password',
          role: Role.TEACHER,
        } as RegisterDto)
        .expect(HttpStatus.CREATED);
      expect(response.body.user).toHaveProperty('role');
      expect(response.body.user).toHaveProperty('email', 'another@example.com');
    });

    it('/auth/register (POST) - should not register with ADMIN role', async () => {
      await request(app.getHttpServer())
        .post('/auth/register')
        .send({
          name: 'Admin Attempt',
          email: 'admin_attempt@example.com',
          password: 'password',
          role: Role.ADMIN,
        } as RegisterDto)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it('/auth/login (POST) - should login admin user', async () => {
      const response = await request(app.getHttpServer())
        .post('/auth/login')
        .send({ email: 'admin@gmail.com', password: 'admin' } as LoginDto)
        .expect(HttpStatus.OK);
      expect(response.body).toHaveProperty('token');
      expect(response.body.user.email).toBe('admin@gmail.com');
      adminToken = response.body.token;
    });

    it('/auth/login (POST) - should return 401 for invalid credentials', async () => {
      await request(app.getHttpServer())
        .post('/auth/login')
        .send({ email: 'admin@gmail.com', password: 'wrongpassword' } as LoginDto)
        .expect(HttpStatus.UNAUTHORIZED);
    });
  });

  describe('Protected Routes', () => {
    it('/profile (GET) - should return user profile with valid token', async () => {
      const response = await request(app.getHttpServer())
        .get('/profile')
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(HttpStatus.OK);
      expect(response.body).toHaveProperty('email', 'admin@gmail.com');
    });

    it('/profile (GET) - should return 401 without token', async () => {
      await request(app.getHttpServer()).get('/profile').expect(HttpStatus.UNAUTHORIZED);
    });

    it('/admin (GET) - should allow admin access', async () => {
      await request(app.getHttpServer())
        .get('/admin')
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(HttpStatus.OK);
    });

    it('/admin (GET) - should return 403 for non-admin user', async () => {
      await request(app.getHttpServer())
        .get('/admin')
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(HttpStatus.FORBIDDEN);
    });
  });

  describe('Book Management', () => {
    it('/book (POST) - should create a book (Admin only)', async () => {
      const createBookDto: CreateBookDto = {
        title: 'Test Book',
        author: 'Test Author',
        quantity: 5,
      };

      const response = await request(app.getHttpServer())
        .post('/book')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(createBookDto)
        .expect(HttpStatus.CREATED);

      expect(response.body).toHaveProperty('data');
      expect(response.body.data).toHaveProperty('id');
      expect(response.body.data.title).toBe(createBookDto.title);
      expect(response.body.data.author).toBe(createBookDto.author);
      expect(response.body.data.quantity).toBe(createBookDto.quantity);
      
      testBookId = response.body.data.id;
    });

    it('/book (POST) - should return 403 for non-admin users', async () => {
      const createBookDto: CreateBookDto = {
        title: 'Unauthorized Book',
        author: 'Unauthorized Author',
        quantity: 3,
      };

      await request(app.getHttpServer())
        .post('/book')
        .set('Authorization', `Bearer ${studentToken}`)
        .send(createBookDto)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('/book (GET) - should return all books (Authenticated users)', async () => {
      const response = await request(app.getHttpServer())
        .get('/book')
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(HttpStatus.OK);

      expect(response.body).toHaveProperty('data');
      expect(Array.isArray(response.body.data)).toBe(true);
      expect(response.body.data.length).toBeGreaterThan(0);
    });

    it('/book (GET) - should return 401 without token', async () => {
      await request(app.getHttpServer())
        .get('/book')
        .expect(HttpStatus.UNAUTHORIZED);
    });

    it('/book/:id (GET) - should return a specific book', async () => {
      const response = await request(app.getHttpServer())
        .get(`/book/${testBookId}`)
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(HttpStatus.OK);

      expect(response.body).toHaveProperty('data');
      expect(response.body.data.id).toBe(testBookId);
      expect(response.body.data.title).toBe('Test Book');
    });

    it('/book/:id (GET) - should return 404 for non-existent book', async () => {
      const fakeId = '00000000-0000-0000-0000-000000000000';
      await request(app.getHttpServer())
        .get(`/book/${fakeId}`)
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(HttpStatus.NOT_FOUND);
    });

    it('/book/:id (PATCH) - should update a book (Admin only)', async () => {
      const updateBookDto: UpdateBookDto = {
        title: 'Updated Test Book',
        quantity: 10,
      };

      const response = await request(app.getHttpServer())
        .patch(`/book/${testBookId}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send(updateBookDto)
        .expect(HttpStatus.OK);

      expect(response.body).toHaveProperty('data');
      expect(response.body.data.title).toBe(updateBookDto.title);
      expect(response.body.data.quantity).toBe(updateBookDto.quantity);
    });

    it('/book/:id (PATCH) - should return 403 for non-admin users', async () => {
      const updateBookDto: UpdateBookDto = {
        title: 'Unauthorized Update',
      };

      await request(app.getHttpServer())
        .patch(`/book/${testBookId}`)
        .set('Authorization', `Bearer ${studentToken}`)
        .send(updateBookDto)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('/book/:id (DELETE) - should delete a book (Admin only)', async () => {
      await request(app.getHttpServer())
        .delete(`/book/${testBookId}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(HttpStatus.OK);
      
      // Reset testBookId since it's now deleted
      testBookId = '';
    });

    it('/book/:id (DELETE) - should return 403 for non-admin users', async () => {
      // Create another book for this test
      const createBookDto: CreateBookDto = {
        title: 'Another Test Book',
        author: 'Another Test Author',
        quantity: 3,
      };

      const bookResponse = await request(app.getHttpServer())
        .post('/book')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(createBookDto)
        .expect(HttpStatus.CREATED);

      await request(app.getHttpServer())
        .delete(`/book/${bookResponse.body.data.id}`)
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(HttpStatus.FORBIDDEN);
    });
  });

  describe('User Management', () => {
    it('/user (POST) - should create a user (Admin only)', async () => {
      const createUserDto: CreateUserDto = {
        name: 'New Test User',
        email: 'newuser@example.com',
        password: 'password123',
        role: Role.STUDENT,
      };

      const response = await request(app.getHttpServer())
        .post('/user')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(createUserDto)
        .expect(HttpStatus.CREATED);

      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe(createUserDto.name);
      expect(response.body.email).toBe(createUserDto.email);
      expect(response.body.role).toBe(createUserDto.role);
    });

    it('/user (POST) - should return 403 for non-admin users', async () => {
      const createUserDto: CreateUserDto = {
        name: 'Unauthorized User',
        email: 'unauthorized@example.com',
        password: 'password123',
        role: Role.STUDENT,
      };

      await request(app.getHttpServer())
        .post('/user')
        .set('Authorization', `Bearer ${studentToken}`)
        .send(createUserDto)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('/user (GET) - should return all users (Admin only)', async () => {
      const response = await request(app.getHttpServer())
        .get('/user')
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(HttpStatus.OK);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });

    it('/user (GET) - should return 403 for non-admin users', async () => {
      await request(app.getHttpServer())
        .get('/user')
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(HttpStatus.FORBIDDEN);
    });

    it('/user/:id (GET) - should return a specific user (Admin only)', async () => {
      const response = await request(app.getHttpServer())
        .get(`/user/${studentUserId}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(HttpStatus.OK);

      expect(response.body.id).toBe(studentUserId);
      expect(response.body.email).toBe('student@example.com');
    });

    it('/user/:id (PATCH) - should update a user (Admin only)', async () => {
      const updateUserDto: UpdateUserDto = {
        name: 'Updated Student Name',
      };

      const response = await request(app.getHttpServer())
        .patch(`/user/${studentUserId}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send(updateUserDto)
        .expect(HttpStatus.OK);

      expect(response.body.name).toBe(updateUserDto.name);
    });

    it('/user/:id (DELETE) - should delete a user (Admin only)', async () => {
      // Create a user to delete
      const createUserDto: CreateUserDto = {
        name: 'User To Delete',
        email: 'deleteme@example.com',
        password: 'password123',
        role: Role.STUDENT,
      };

      const userResponse = await request(app.getHttpServer())
        .post('/user')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(createUserDto)
        .expect(HttpStatus.CREATED);

      await request(app.getHttpServer())
        .delete(`/user/${userResponse.body.id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(HttpStatus.OK);
    });
  });

  describe('Rental Management', () => {
    let rentalTestBookId: string;

    beforeEach(async () => {
      // Create a book for rental tests
      const createBookDto: CreateBookDto = {
        title: 'Rental Test Book',
        author: 'Rental Test Author',
        quantity: 5,
      };

      const bookResponse = await request(app.getHttpServer())
        .post('/book')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(createBookDto)
        .expect(HttpStatus.CREATED);

      rentalTestBookId = bookResponse.body.data.id;
    });

    it('/rental/rent (POST) - should rent a book', async () => {
      const rentBookDto: RentBookDto = {
        bookId: rentalTestBookId,
      };

      const response = await request(app.getHttpServer())
        .post('/rental/rent')
        .set('Authorization', `Bearer ${studentToken}`)
        .send(rentBookDto)
        .expect(HttpStatus.CREATED);

      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('rental');
      expect(response.body.rental).toHaveProperty('id');
      expect(response.body.rental.bookId).toBe(rentalTestBookId);
      expect(response.body.rental.userId).toBe(studentUserId);
      expect(response.body.rental.status).toBe('RENTED');
      
      testRentalId = response.body.rental.id;
    });

    it('/rental/rent (POST) - should return 401 without token', async () => {
      const rentBookDto: RentBookDto = {
        bookId: rentalTestBookId,
      };

      await request(app.getHttpServer())
        .post('/rental/rent')
        .send(rentBookDto)
        .expect(HttpStatus.UNAUTHORIZED);
    });

    it('/rental/rent (POST) - should return 400 for invalid book ID', async () => {
      const rentBookDto: RentBookDto = {
        bookId: '00000000-0000-0000-0000-000000000000',
      };

      await request(app.getHttpServer())
        .post('/rental/rent')
        .set('Authorization', `Bearer ${studentToken}`)
        .send(rentBookDto)
        .expect(HttpStatus.NOT_FOUND);
    });

    it('/rental/my-rentals (GET) - should return user rentals', async () => {
      // First rent a book to have rentals to check
      const rentBookDto: RentBookDto = {
        bookId: rentalTestBookId,
      };

      await request(app.getHttpServer())
        .post('/rental/rent')
        .set('Authorization', `Bearer ${studentToken}`)
        .send(rentBookDto)
        .expect(HttpStatus.CREATED);

      const response = await request(app.getHttpServer())
        .get('/rental/my-rentals')
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(HttpStatus.OK);

      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('rentals');
      expect(Array.isArray(response.body.rentals)).toBe(true);
      expect(response.body.rentals.length).toBeGreaterThan(0);
      expect(response.body.rentals[0].userId).toBe(studentUserId);
    });

    it('/rental/my-rentals (GET) - should return 401 without token', async () => {
      await request(app.getHttpServer())
        .get('/rental/my-rentals')
        .expect(HttpStatus.UNAUTHORIZED);
    });

    it('/rental/return/:rentalId (PATCH) - should return a book', async () => {
      // First rent a book
      const rentBookDto: RentBookDto = {
        bookId: rentalTestBookId,
      };

      const rentalResponse = await request(app.getHttpServer())
        .post('/rental/rent')
        .set('Authorization', `Bearer ${studentToken}`)
        .send(rentBookDto)
        .expect(HttpStatus.CREATED);

      const rentalId = rentalResponse.body.rental.id;

      const response = await request(app.getHttpServer())
        .patch(`/rental/return/${rentalId}`)
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(HttpStatus.OK);

      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('updatedRental');
      expect(response.body.updatedRental.returnedAt).toBeDefined();
      expect(response.body.updatedRental.returnedAt).not.toBeNull();
    });

    it('/rental/return/:rentalId (PATCH) - should return 401 without token', async () => {
      // First rent a book
      const rentBookDto: RentBookDto = {
        bookId: rentalTestBookId,
      };

      const rentalResponse = await request(app.getHttpServer())
        .post('/rental/rent')
        .set('Authorization', `Bearer ${studentToken}`)
        .send(rentBookDto)
        .expect(HttpStatus.CREATED);

      const rentalId = rentalResponse.body.rental.id;

      await request(app.getHttpServer())
        .patch(`/rental/return/${rentalId}`)
        .expect(HttpStatus.UNAUTHORIZED);
    });

    it('/rental/return/:rentalId (PATCH) - should return 404 for non-existent rental', async () => {
      const fakeRentalId = '00000000-0000-0000-0000-000000000000';
      await request(app.getHttpServer())
        .patch(`/rental/return/${fakeRentalId}`)
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(HttpStatus.NOT_FOUND);
    });

    it('/rental/all-rentals (GET) - should return all rentals (Admin only)', async () => {
      // First create some rentals
      const rentBookDto: RentBookDto = {
        bookId: rentalTestBookId,
      };

      await request(app.getHttpServer())
        .post('/rental/rent')
        .set('Authorization', `Bearer ${studentToken}`)
        .send(rentBookDto)
        .expect(HttpStatus.CREATED);

      const response = await request(app.getHttpServer())
        .get('/rental/all-rentals')
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(HttpStatus.OK);

      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('rentals');
      expect(Array.isArray(response.body.rentals)).toBe(true);
      expect(response.body.rentals.length).toBeGreaterThan(0);
    });

    it('/rental/all-rentals (GET) - should return 403 for non-admin users', async () => {
      await request(app.getHttpServer())
        .get('/rental/all-rentals')
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(HttpStatus.FORBIDDEN);
    });
  });

  describe('Business Logic Validation', () => {
    it('should not allow renting more books than available quantity', async () => {
      // Create a book with limited quantity
      const limitedBookDto: CreateBookDto = {
        title: 'Limited Book',
        author: 'Limited Author',
        quantity: 1,
      };

      const bookResponse = await request(app.getHttpServer())
        .post('/book')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(limitedBookDto)
        .expect(HttpStatus.CREATED);

      const limitedBookId = bookResponse.body.data.id;

      // Rent the book first time (should succeed)
      const rentBookDto: RentBookDto = {
        bookId: limitedBookId,
      };

      await request(app.getHttpServer())
        .post('/rental/rent')
        .set('Authorization', `Bearer ${studentToken}`)
        .send(rentBookDto)
        .expect(HttpStatus.CREATED);

      // Try to rent the same book again (should fail)
      await request(app.getHttpServer())
        .post('/rental/rent')
        .set('Authorization', `Bearer ${teacherToken}`)
        .send(rentBookDto)
        .expect(HttpStatus.BAD_REQUEST);
    });

    it('should not allow returning a book that is not rented', async () => {
      const fakeRentalId = '00000000-0000-0000-0000-000000000000';
      await request(app.getHttpServer())
        .patch(`/rental/return/${fakeRentalId}`)
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(HttpStatus.NOT_FOUND);
    });

    it('should not allow returning a book by someone who did not rent it', async () => {
      // Create a book and rent it with student
      const bookDto: CreateBookDto = {
        title: 'Security Test Book',
        author: 'Security Test Author',
        quantity: 3,
      };

      const bookResponse = await request(app.getHttpServer())
        .post('/book')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(bookDto)
        .expect(HttpStatus.CREATED);

      const bookId = bookResponse.body.data.id;

      // Rent with student
      const rentBookDto: RentBookDto = {
        bookId: bookId,
      };

      const rentalResponse = await request(app.getHttpServer())
        .post('/rental/rent')
        .set('Authorization', `Bearer ${studentToken}`)
        .send(rentBookDto)
        .expect(HttpStatus.CREATED);

      // Try to return with teacher (should fail)
      await request(app.getHttpServer())
        .patch(`/rental/return/${rentalResponse.body.rental.id}`)
        .set('Authorization', `Bearer ${teacherToken}`)
        .expect(HttpStatus.BAD_REQUEST);
    });
  });

  describe('Edge Cases and Error Handling', () => {
    it('should handle malformed JWT tokens gracefully', async () => {
      await request(app.getHttpServer())
        .get('/profile')
        .set('Authorization', 'Bearer invalid-token')
        .expect(HttpStatus.UNAUTHORIZED);
    });

    it('should handle expired JWT tokens gracefully', async () => {
      // This test would require a way to generate expired tokens
      // For now, we'll test with a malformed token
      await request(app.getHttpServer())
        .get('/profile')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')
        .expect(HttpStatus.UNAUTHORIZED);
    });

    it('should handle missing Authorization header gracefully', async () => {
      await request(app.getHttpServer())
        .get('/profile')
        .expect(HttpStatus.UNAUTHORIZED);
    });

    it('should handle empty Authorization header gracefully', async () => {
      await request(app.getHttpServer())
        .get('/profile')
        .set('Authorization', '')
        .expect(HttpStatus.UNAUTHORIZED);
    });
  });
});
