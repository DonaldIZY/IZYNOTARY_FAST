import { Injectable } from '@nestjs/common';
import { CreateIdentifierDto } from './dto/create-identifier.dto';
import { UpdateIdentifierDto } from './dto/update-identifier.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Identifier } from './entities/identifier.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class IdentifierService {

	constructor(
		@InjectRepository(Identifier)
		private readonly identifiersRepository: Repository<Identifier>,
		private readonly entityManager: EntityManager
	) {}

	async create(createIdentifierDto: CreateIdentifierDto) {
		const identifier = new Identifier(createIdentifierDto);
		await this.entityManager.save(identifier);
	}

	async findAll() {
		return await this.identifiersRepository.find();
	}

	async findOne(id: number) {
		return await this.identifiersRepository.findOneBy({ id });
	}

	async update(id: number, updateIdentifierDto: UpdateIdentifierDto) {
		const identifier = await this.identifiersRepository.findOneBy({ id });
		Object.assign(identifier, updateIdentifierDto);
		await this.entityManager.save(identifier);
	}

	async remove(id: number) {
		await this.identifiersRepository.delete(id);
	}

}
