import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class RolesService {

	constructor(
		@InjectRepository(Role)
		private readonly rolesRepository: Repository<Role>,
		private readonly entityManager: EntityManager
	) {}

	async create(createRoleDto: CreateRoleDto) {
        const role = new Role(createRoleDto);
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
