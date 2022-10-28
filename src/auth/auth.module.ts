import { PrismaModule } from './../prisma/prisma.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaModule],
  imports: [PrismaModule],
})
export class AuthModule {}
