import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { EntityManager, In, Repository } from 'typeorm';
import { Permission } from 'src/permissions/entities/permission.entity';

@Injectable()
export class RolesService {

	constructor(
		@InjectRepository(Role) private readonly rolesRepository: Repository<Role>,
		@InjectRepository(Permission) private readonly permissionsRepository: Repository<Permission>,
		private readonly entityManager: EntityManager
	) {}

	async create(createRoleDto: CreateRoleDto) {
        const role = new Role(createRoleDto);

		if (createRoleDto.permissionIds && createRoleDto.permissionIds.length > 0) {
			const permissions = await this.permissionsRepository.findBy({ 
				id: In(createRoleDto.permissionIds), 
			});
			role.permissions = permissions;
		}
		
		await this.entityManager.save(role);
	}

	async findAll() {
		return await this.rolesRepository.find();
	}

	async findOne(id: number) {
		return await this.rolesRepository.findOne({
			where: { id },
			relations: { permissions: true },
		});
	}

	async update(id: number, updateRoleDto: UpdateRoleDto) {
		const role = await this.rolesRepository.findOneBy({ id });
		Object.assign(role, updateRoleDto);
		await this.entityManager.save(role);
	}

	async remove(id: number) {
		await this.rolesRepository.delete(id);
	}

}
