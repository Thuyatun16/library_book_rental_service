import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET || '123456',
  expiresIn: process.env.JWT_EXPIRATION_TIME || '1d',
}));
