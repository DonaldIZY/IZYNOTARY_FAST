import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/customers/entities/customer.entity';
import { User } from 'src/users/entities/user.entity';
import { Password } from 'src/utils/password.util';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @InjectRepository(Customer) private readonly customerRepository: Repository<Customer>, 
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

    async validateCustomer(email: string, pass: string): Promise<any> {

		const customer = await this.customerRepository.findOne({
			where: { email },
            relations: { identifier: true },
		});

		if (customer && (await Password.validatePassword(pass, customer.identifier.hashedValue))) {
            const { identifier, ...result } = customer;
            return result;
        }
		return null;
        
	}

    async loginUser(user: any) {
        const payload = { userId: user.id, userName: user.lastName+" "+user.firstName, userEmail: user.email, userRole: user.role.name };
        return {
            accessToken: this.jwtService.sign(payload, { expiresIn: '1h'}),
        };
    }

    async loginCustomer(user: any) {
        const payload = { userId: user.id, userName: user.lastName+" "+user.firstName, userEmail: user.email };
        return {
            accessToken: this.jwtService.sign(payload, { expiresIn: '1h'}),
        };
    }
}
