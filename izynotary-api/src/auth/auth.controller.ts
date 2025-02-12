import { Body, Controller, Post, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        const user = await this.authService.validateUser(loginDto.email, loginDto.password);
        if (!user) {
            throw new UnauthorizedException('Identifiants invalides');
        }
        return this.authService.login(user);
    }

    @UseGuards(JwtAuthGuard)
    @Post('protected')
    protectedRoute(@Req() req: any) {
        return { message: 'This is a protected route', user: req.user };
    }

    
}
