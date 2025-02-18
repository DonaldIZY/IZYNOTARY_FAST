import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>();
    const token = request.cookies?.auth_token;

    console.log('🔍 Token reçu dans le guard :', token); // ✅ Vérifie si le token est bien récupéré

    if (!token) {
      console.warn('⚠️ Aucun token trouvé dans les cookies');
      throw new UnauthorizedException('Token manquant');
    }

    request.headers['authorization'] = `Bearer ${token}`; // ✅ Ajoute le token manuellement
    return super.canActivate(context);
  }
}
