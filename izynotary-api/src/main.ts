/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import * as fs from 'fs';
import { join } from 'path';
import { AppModule } from './app.module';

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

  app.use(cookieParser());

  app.enableCors({
    origin: ["http://localhost:2610", "http://localhost:2611", "http://localhost:3000", "http://izynotary.izydr.net","https://izynotary.izydr.net", "http://izynotaryfast.izydr.net","https://izynotaryfast.izydr.net", "http://customerizynotaryfast.izydr.net","https://customerizynotaryfast.izydr.net"], // Origine autorisée (frontend)
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Si vous avez besoin d'envoyer des cookies ou des headers d'authentification
  });

  app.use(cookieParser()); // Middleware pour gérer les cookies

  // Configuration Swagger
  const config = new DocumentBuilder()
    .setTitle('API IzyNotary')
    .setDescription('Documentation de l\'API pour le backend de IzyNotary')
    .setVersion('1.0')
    .addBearerAuth() // Ajoute un champ pour l'authentification via token
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    deepScanRoutes: true,
  });
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.APP_PORT ?? 3000);
}
bootstrap();
