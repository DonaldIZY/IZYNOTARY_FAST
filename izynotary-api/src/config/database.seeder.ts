import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from 'src/permissions/dto/create-permission.dto';
import { Permission } from 'src/permissions/entities/permission.entity';
import { CreateRoleDto } from 'src/roles/dto/create-role.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Role } from 'src/roles/entities/role.entity';
import { User } from 'src/users/entities/user.entity';
import { EntityManager } from 'typeorm';
import { DataSource, In } from 'typeorm';
import { Identifier } from 'src/identifier/entities/identifier.entity';
import { Password } from 'src/utils/password.util';

@Injectable()
export class DatabaseSeeder {
  constructor(
    private readonly dataSource: DataSource,
    private readonly entityManager: EntityManager,
  ) {}

  async seedPermissions() {
    const permissionRepository = this.dataSource.getRepository(Permission);

    const permissions = [
      {
        code: 'CREATE_PERMISSION',
        name: 'Créer une permission',
        description: 'Permet de créer une nouvelle permission',
      },
      {
        code: 'UPDATE_PERMISSION',
        name: 'Modifier une permission',
        description: 'Permet de modifier une permission existante',
      },
      {
        code: 'DELETE_PERMISSION',
        name: 'Supprimer une permission',
        description: 'Permet de supprimer une permission',
      },
    ] as CreatePermissionDto[];

    for (const permission of permissions) {
      const existingPermission = await permissionRepository.findOne({
        where: { code: permission.code },
      });
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
      {
        name: 'Administrateur',
        description: 'description1',
        permissionIds: [1, 2],
      },
      { name: 'Clerc', description: 'description2', permissionIds: [2, 3] },
      { name: 'Notaire', description: 'description3', permissionIds: [1] },
    ] as CreateRoleDto[];

    for (const role of roles) {
      let newRole;
      const existingRole = await roleRepository.findOne({
        where: { name: role.name },
      });

      if (!existingRole) {
        if (role.permissionIds && role.permissionIds.length > 0) {
          const permissions = await permissionRepository.findBy({
            id: In(role.permissionIds),
          });
          newRole = { ...role, permissions: permissions };

          delete newRole.permissionIds;
        }

        await roleRepository.save(newRole);
      }
    }
    console.log('Roles successfully seeded!');
  }

  async seedSuperUser() {
    const userRepository = this.dataSource.getRepository(User);
    const roleRepository = this.dataSource.getRepository(Role);

    const existingUser = await userRepository.findOne({
      where: { email: 'izytechnology225@gmail.com' },
    });

    if (existingUser) {
      console.log('Super-admin existe déjà.');
      return;
    }

    const role = await roleRepository.findOne({ where: { id: 1 } });

    if (!role) {
      console.error(
        "❌ Le rôle 'Administrateur' n'existe pas. Veuillez le créer d'abord.",
      );
      return;
    }

    const password = process.env.SUPERUSERPASSWORD; // Mot de passe par défaut (à changer)
    console.log('mot de passe admin', password);

    // Hacher le mot de passe
    const hashedValue = await Password.hashPassword(password);

    const identifier = new Identifier({ ...hashedValue });

    // Créer l'utilisateur super admin
    const user = new User({
      firstName: 'Super',
      lastName: 'Admin',
      email: process.env.SUPERUSEREMAIL,
      role, // Associer le rôle Administrateur
    });

    user.identifier = identifier; // Associer le mot de passe haché
    user.superUser =  true;

    console.log('Super-Admin créé :', user);

    // Sauvegarder en base de données
    await this.entityManager.save(user);

    console.log('✅ Super administrateur enregistré avec succès !');
  }
}
