import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';
@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  async signup(dto: AuthDto) {
    // generate passsword hash
    const hash = await argon.hash(dto.password);
    // save user  in db
    const user = await this.prismaService.user.create({
      data: {
        email: dto.email,
        hash,
      },
    });

    delete user.hash;
    // return new user
    return user;
  }

  signin() {
    return {
      message: 'signin',
    };
  }
}
