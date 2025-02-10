import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body('email') email: string, @Body('password') password: string, @Res() res: Response) {
        return this.authService.login(email, password, res);
    }

    @UseGuards(JwtAuthGuard)
    @Post('protected')
    protectedRoute(@Req() req: any) {
        return { message: 'This is a protected route', user: req.user };
    }

    
}