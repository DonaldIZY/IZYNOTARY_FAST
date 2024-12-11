import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { TypeORMConf } from './config/typeorm.conf';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { IdentifierModule } from './identifier/identifier.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }), // Charge les variables d'environnement
		TypeORMConf,
		UsersModule,
		RolesModule,
		PermissionsModule,
		IdentifierModule,
	],
	controllers: [],
	providers: [],
})

export class AppModule {}