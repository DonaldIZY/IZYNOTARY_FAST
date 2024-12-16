import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { TypeORMConf } from './config/typeorm.conf';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { IdentifierModule } from './identifier/identifier.module';
import { DatabaseSeeder } from './config/database.seeder';
import { CustomersModule } from './customers/customers.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }), // Charge les variables d'environnement
		TypeORMConf,
		UsersModule,
		RolesModule,
		PermissionsModule,
		IdentifierModule,
		CustomersModule,
	],
	controllers: [],
	providers: [DatabaseSeeder],
})

export class AppModule implements OnApplicationBootstrap {
	constructor(private readonly seeder: DatabaseSeeder) {}

	async onApplicationBootstrap() {
        await this.seeder.seedPermissions();
		await this.seeder.seedRoles();
    }
}