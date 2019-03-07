import { Module } from '@nestjs/common';
import { HttpStrategy } from './http.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'bearer' }),
  ],
  providers: [HttpStrategy],
})
export class AuthModule {}
