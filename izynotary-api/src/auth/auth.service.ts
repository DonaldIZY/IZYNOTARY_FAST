import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
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

    async validateUser(email: string, pass: string): Promise<any> {

		const user = await this.userRepository.findOne({
			where: { email },
            relations: { role: true, identifier: true},
		});

		if (user && (await Password.validatePassword(pass, user.identifier.hashedValue))) {
            const { identifier, ...result } = user;
            return result;
        }
		return null;
	}

    async login(user: any) {
        const payload = { username: user.lastName+" "+user.firstName, role: user.role.name, sub: user.id };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }
}
