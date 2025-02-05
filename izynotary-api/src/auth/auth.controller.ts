import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body('email') email: string, @Body('password') password: string) {
        return this.authService.login(email, password);
    }

    @UseGuards(JwtAuthGuard)
    @Post('protected')
    protectedRoute(@Req() req: any) {
        return { message: 'This is a protected route', user: req.user };
    }

    
}
