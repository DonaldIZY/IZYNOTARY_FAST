import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as fs from 'fs';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {

  const uploadDir = join(__dirname, '..', 'uploads');

  const customerDir = join(uploadDir, 'customers');

  const sellerDir = join(uploadDir, 'sellers')

  const procedureDir = join(uploadDir, 'procedures');
  const sellinngDir = join(procedureDir, 'selling');
  const companyFormationDir = join(procedureDir, 'companyFormation');
  const companyModificationDir = join(procedureDir, 'companyModification');
  const transferOfMovablePropertyDir = join(procedureDir, 'transferOfMovableProperty');
  const transferOfRealEstateDir = join(procedureDir, 'transferOfRealEstate');
  
  fs.mkdirSync(customerDir, { recursive: true });
  fs.mkdirSync(sellerDir, { recursive: true });
  fs.mkdirSync(sellinngDir, { recursive: true });
  fs.mkdirSync(companyFormationDir, { recursive: true });
  fs.mkdirSync(companyModificationDir, { recursive: true });
  fs.mkdirSync(transferOfMovablePropertyDir, { recursive: true });
  fs.mkdirSync(transferOfRealEstateDir, { recursive: true });
  
  
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ["http://localhost:2610", "http://localhost:2611"], // Origine autorisée (frontend)
    methods: 'GET,POST,PATCH,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true, // Si vous avez besoin d'envoyer des cookies ou des headers d'authentification
  });

  app.use(cookieParser()); // Middleware pour gérer les cookies

  await app.listen(process.env.APP_PORT ?? 3000);
}
bootstrap();
