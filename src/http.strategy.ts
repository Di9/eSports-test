import { Strategy } from 'passport-http-bearer';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy) {

  validate(token: string) {
    const authToken = 'secretToken';
    const validToken = token === authToken;
    if (!validToken) {
      throw new UnauthorizedException();
    }
    return validToken;
  }
}
