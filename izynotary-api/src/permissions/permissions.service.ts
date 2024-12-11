import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from './entities/permission.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class PermissionsService {

	constructor(
		@InjectRepository(Permission)
		private readonly permissionsRepository: Repository<Permission>,
		private readonly entityManager: EntityManager
	) {}

	async create(createPermissionDto: CreatePermissionDto) {
		const permission = new Permission(createPermissionDto);
		await this.entityManager.save(permission);
	}

	async findAll() {
		return await this.permissionsRepository.find();
	}

	async findOne(id: number) {
		return await this.permissionsRepository.findOneBy({ id });
	}

	async update(id: number, updatePermissionDto: UpdatePermissionDto) {
		const permission = await this.permissionsRepository.findOneBy({ id });
		Object.assign(permission, updatePermissionDto);
		await this.entityManager.save(permission);
	}

	async remove(id: number) {
		await this.permissionsRepository.delete(id);
	}

}
