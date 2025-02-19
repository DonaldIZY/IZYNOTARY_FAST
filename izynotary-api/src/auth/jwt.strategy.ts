/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (request: Request) => {
                    return request?.cookies?.auth_token || null;
                }
            ]),
            secretOrKey: configService.get('JWT_SECRET'),
        });
    }

    async validate(payload: any) {
        return {
            userId: payload.userId,
            userName: payload.userName,
            userEmail: payload.userEmail,
            userRole: payload.userRole
        };
    }
}

@Injectable()
export class JwtStrategy_customer extends PassportStrategy(Strategy, 'jwt-customer') {
    constructor(private configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (request: Request) => {
                    return request?.cookies?.auth_token_customer || null;
                }
            ]),
            secretOrKey: configService.get('JWT_SECRET'),
        });
    }

    async validate(payloadCustomer: any) {
        return {
            customerId: payloadCustomer.customerId,
            customerName: payloadCustomer.customerName,
            customerEmail: payloadCustomer.customerEmail,
        };
    }
}
