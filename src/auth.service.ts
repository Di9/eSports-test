import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

  validateToken(token: string): boolean {
    // currently use hard coded bearer token
    const authToken = 'secretToken';
    return token === authToken;
  }
}
