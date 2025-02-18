import { Body, Controller, Get, Post, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { Response } from 'express'
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() loginDto: LoginDto, @Res() res: Response) {
        const user = await this.authService.validateUser(loginDto.email, loginDto.password);
        if (!user) {
            throw new UnauthorizedException('Identifiants invalides');
        }
        
        const token = await this.authService.login(user);

        res.cookie('auth_token', token.accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 3600000
        });

        return res.send({ message: 'Connexion réussite' })
    }

    @Post('logout')
    logout(@Res() res: Response) {
        res.clearCookie('auth_token');
        return res.send({ message: 'Déconnexion réussie' });
    }

    @UseGuards(JwtAuthGuard)
    @Get('me')
    getProfile(@Req() req: any) {
        return req.user; // Retourne les infos utilisateur
    }

}
