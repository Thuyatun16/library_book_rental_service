import { Role } from '@client';

export interface JwtPayload {
  email: string;
  sub: string;
  role: Role;
}
