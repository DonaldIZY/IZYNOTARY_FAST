import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    handleRequest(err, user, info) {
        if (info?.message === 'No auth token') {
            throw new UnauthorizedException('Aucun token fourni. Veuillez vous connecter.');
          }
        
          if (info?.message === 'jwt expired') {
            throw new UnauthorizedException('Votre session a expiré. Veuillez vous reconnecter.');
          }
        
          if (err || !user) {
            throw new UnauthorizedException('Authentification requise.');
          }
        return user;
      }
}
