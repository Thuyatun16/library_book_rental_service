import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { User } from '@client';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(
    email: string,
    pass: string,
  ): Promise<Omit<User, 'password'> | null> {
    //console.log('LocalStrategy validate:', email);
    const user = await this.authService.validateUser(email, pass);
    if (!user) {
      //console.log('LocalStrategy: User validation failed');
      throw new UnauthorizedException();
    }
    //console.log('LocalStrategy: User validated');
    return user;
  }
}
