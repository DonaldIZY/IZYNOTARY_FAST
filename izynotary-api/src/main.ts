import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as fs from 'fs';

async function bootstrap() {

  const uploadDir = join(__dirname, '..', 'uploads');
  const customerDir = join(uploadDir, 'customers');
  const procedureDir = join(uploadDir, 'procedures');
  
  fs.mkdirSync(customerDir, { recursive: true });
  fs.mkdirSync(procedureDir, { recursive: true });
  
  
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:2610', // Origine autorisée (frontend)
    methods: 'GET,POST,PATCH,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true, // Si vous avez besoin d'envoyer des cookies ou des headers d'authentification
  });


  await app.listen(process.env.APP_PORT ?? 3000);
}
bootstrap();
