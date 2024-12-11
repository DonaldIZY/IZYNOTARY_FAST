import { Module } from "@nestjs/common";
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'mariadb',
                host: configService.get('DB_HOST'),
                port: configService.get<number>('DB_PORT'),
                username: configService.get('DB_USERNAME'),
                password: configService.get('DB_PASSWORD'),
                database: configService.get('DB_DATABASE'),
                autoLoadEntities: true, // Charge les entités
                synchronize: configService.get('DB_SYNCHRONIZE'), // Synchronise automatiquement les entités (désactivez en production)
                entities: [__dirname + '/entities/*.ts'],
                migrations: [__dirname + '/migrations/*.ts'],
            }),
        }),
           
    ],
})

export class TypeORMConf {}