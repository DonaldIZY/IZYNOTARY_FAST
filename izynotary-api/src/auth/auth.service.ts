import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'express';
import { User } from 'src/users/entities/user.entity';
import { Password } from 'src/utils/password.util';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly jwtService: JwtService,
    ) {}

    async login(email: string, password: string, res: Response): Promise<{ accessToken: string }> {
        const user = await this.userRepository.findOne({ 
            where: { email },
            relations: {
                role: true, 
                identifier: true
            }
        });

        if(!user || !(await Password.validatePassword(password, user.identifier.hashedValue))) {
            throw new UnauthorizedException('Invalid credentials')
        }

        const payload = { id: user.id, lastName: user.lastName, firstName: user.firstName, role: user.role.name };
        const accessToken = this.jwtService.sign(payload);

        res.cookie('access_token', accessToken, {
          httpOnly: true,
          secure: false, // Mettre à false en local si besoin
          sameSite: 'strict',
          maxAge: 3600000
        });

        return { accessToken };
    }

    async logout(res: Response) {
        res.clearCookie('access_token');
        return { message: 'Déconnexion réussie' };
    }
    
}