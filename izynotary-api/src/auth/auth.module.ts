/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from 'src/customers/entities/customer.entity';
import { User } from 'src/users/entities/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy, JwtStrategy_customer } from './jwt.strategy';

@Module({
	imports: [
		TypeOrmModule.forFeature([User, Customer]),
		PassportModule.register({ defaultStrategy: 'jwt' }),
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				secret: configService.get('JWT_SECRET'),
				signOptions: { expiresIn: `${configService.get('JWT_EXPIRATION')}s` },

			}),
		})
	],
	exports: [JwtStrategy, JwtStrategy_customer, PassportModule],
	providers: [AuthService, JwtStrategy, JwtStrategy_customer],
	controllers: [AuthController]
})
export class AuthModule { }
