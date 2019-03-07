import { CacheModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.scheme';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthModule } from './auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://esports:hI832fjWDr@ds261155.mlab.com:61155/esports`),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    AuthModule,
    CacheModule.register(),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
