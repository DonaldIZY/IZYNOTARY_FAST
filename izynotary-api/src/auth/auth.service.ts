import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Password } from 'src/utils/password.util';
import { Repository } from 'typeorm';
import { Response } from 'express'; // 🔥 Ajout pour manipuler la réponse HTTP

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, password: string, res: Response) {
    const user = await this.userRepository.findOne({
      where: { email },
      relations: {
        role: true,
        identifier: true,
      },
    });

    if (
      !user ||
      !(await Password.validatePassword(password, user.identifier.hashedValue))
    ) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { id: user.id, email: user.email };
    return this.jwtService.sign(payload);

  }
}
