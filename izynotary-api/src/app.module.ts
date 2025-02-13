import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { TypeORMConf } from './config/typeorm.conf';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { IdentifierModule } from './identifier/identifier.module';
import { DatabaseSeeder } from './config/database.seeder';
import { CustomersModule } from './customers/customers.module';
import { FoldersModule } from './folders/folders.module';
import { StepsModule } from './steps/steps.module';
import { AuthModule } from './auth/auth.module';
import { StatsModule } from './stats/stats.module';
import { SellersModule } from './sellers/sellers.module';
import { FolderHistoriesModule } from './folder-histories/folder-histories.module';
import { CustomerHistoriesModule } from './customer-histories/customer-histories.module';
import { UserHistoriesModule } from './user-histories/user-histories.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }), // Charge les variables d'environnement
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', 'uploads'), // Chemin absolu vers le dossier "uploads"
      		serveRoot: '/uploads', // (Optionnel) Accès via http://localhost:3000/uploads/
		}),
		TypeORMConf,
		UsersModule,
		RolesModule,
		PermissionsModule,
		IdentifierModule,
		CustomersModule,
		FoldersModule,
		StepsModule,
		AuthModule,
		SellersModule,
		StatsModule,
		FolderHistoriesModule,
		CustomerHistoriesModule,
		UserHistoriesModule,
		
	],
	controllers: [],
	providers: [DatabaseSeeder],
})

export class AppModule implements OnApplicationBootstrap {
	constructor(private readonly seeder: DatabaseSeeder) {}

	async onApplicationBootstrap() {
        await this.seeder.seedPermissions();
		await this.seeder.seedRoles();
		await this.seeder.seedSuperUser();
    }
}