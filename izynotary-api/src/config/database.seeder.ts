import { Injectable } from "@nestjs/common";
import { CreatePermissionDto } from "src/permissions/dto/create-permission.dto";
import { Permission } from "src/permissions/entities/permission.entity";
import { CreateRoleDto } from "src/roles/dto/create-role.dto";
import { Role } from "src/roles/entities/role.entity";
import { DataSource, In } from "typeorm";

@Injectable()
export class DatabaseSeeder {

    constructor(private readonly dataSource: DataSource) {}

    async seedPermissions() {
        const permissionRepository = this.dataSource.getRepository(Permission);

        const permissions = [
            { code: 'CREATE_PERMISSION', name: 'Créer une permission', description: 'Permet de créer une nouvelle permission' },
            { code: 'UPDATE_PERMISSION', name: 'Modifier une permission', description: 'Permet de modifier une permission existante' },
            { code: 'DELETE_PERMISSION', name: 'Supprimer une permission', description: 'Permet de supprimer une permission' }
        ] as CreatePermissionDto[];

        for (const permission of permissions) {
            const existingPermission = await permissionRepository.findOne({ where: { code: permission.code } });
            if (!existingPermission) {
                await permissionRepository.save(permission);
            }
        }
        console.log('Permissions successfully seeded!');
    }

    async seedRoles() {
        const roleRepository = this.dataSource.getRepository(Role);
        const permissionRepository = this.dataSource.getRepository(Permission);
        
        const roles = [
            { name: 'Administrateur', description:'description1', permissionIds: [1, 2] }, 
            { name: 'Clerc', description:'description2', permissionIds: [2,3] }, 
            { name: 'Notaire', description:'description3', permissionIds: [1] }
        ] as CreateRoleDto[];;

        for (const role of roles) {
            let newRole;
            const existingRole = await roleRepository.findOne({ where: { name: role.name } });
            
            if (!existingRole) {

                if (role.permissionIds && role.permissionIds.length > 0) {
                    const permissions = await permissionRepository.findBy({ 
                        id: In(role.permissionIds), 
                    });
                    newRole = {...role, permissions: permissions}

                    delete newRole.permissionIds;
                }

                await roleRepository.save(newRole);
            }
        }
        console.log('Roles successfully seeded!');
    }
} 