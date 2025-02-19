/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard, JwtAuthGuard_customer } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login/user')
    async loginUser(@Body() loginDto: LoginDto, @Res() res: Response) {
        const user = await this.authService.validateUser(loginDto.email, loginDto.password);
        if (!user) {
            throw new UnauthorizedException('Identifiants invalides');
        }

        const token = await this.authService.loginUser(user);

        res.cookie('auth_token', token.accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 3600000
        });

        return res.send({ message: 'Connexion réussite' })
    }

    @Post('login/customer')
    async loginCustomer(@Body() loginDto: LoginDto, @Res() res: Response) {
        const customer = await this.authService.validateCustomer(loginDto.email, loginDto.password);
        if (!customer) {
            throw new UnauthorizedException('Identifiants invalides');
        }

        const token = await this.authService.loginCustomer(customer);

        console.log('Custmer login : ', customer);

        res.cookie('auth_token_customer', token.accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 3600000
        });

        return res.send({ message: 'Connexion réussie' })
    }

    @Post('logout/user')
    logoutUser(@Res() res: Response) {
        res.clearCookie('auth_token');
        return res.send({ message: 'Déconnexion réussie' });
    }

    @Post('logout/customer')
    logoutCustomer(@Res() res: Response) {
        res.clearCookie('auth_token_customer');
        return res.send({ message: 'Déconnexion réussie' });
    }

    @UseGuards(JwtAuthGuard)
    @Get('me/user')
    getProfileUser(@Req() req: any) {
        return req.user; // Retourne les infos utilisateur
    }

    @UseGuards(JwtAuthGuard_customer)
    @Get('me/customer')
    getProfileCustomer(@Req() req: any) {
        console.log('Customer get profile : ', req.user);
        return req.user; // Retourne les infos utilisateur
    }

}
