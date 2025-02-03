import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common'; //+
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Response } from 'express'; //+

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res() res: Response,
  ) {
    
    const accessToken = await this.authService.login(email, password, res);

    // Définir le cookie sécurisé (httpOnly, sécurisé)
    res.cookie('access_token', accessToken, {
      httpOnly: true, // Empêche l'accès JavaScript (sécurité XSS)
      //secure: process.env.NODE_ENV === 'production', // Active `secure` en prod (HTTPS obligatoire)
      sameSite: 'strict', // Empêche les attaques CSRF
      maxAge: 24 * 60 * 60 * 1000, // Expire après 1 jour
    });

    return res.json({ message: 'Connexion réussie' });
  }

  @UseGuards(JwtAuthGuard)
  @Post('protected')
  protectedRoute(@Req() req: any) {
    return { message: 'This is a protected route', user: req.user };
  }
}
