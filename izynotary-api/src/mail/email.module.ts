import { Module } from '@nestjs/common';
import { EmailService } from './email.service';

@Module({
  providers: [EmailService], // 👈 Ajoute `EmailService` comme provider
  exports: [EmailService], // 👈 Exporte `EmailService` pour l’utiliser dans d'autres modules
})
export class EmailModule {}
