import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Identifier } from 'src/identifier/entities/identifier.entity';
import { Password } from 'src/utils/password.util';

@Injectable()
export class UsersService {

	constructor(
		@InjectRepository(User)
		private readonly usersRepository: Repository<User>,
		private readonly entityManager: EntityManager
	) {}

	async create(createUserDto: CreateUserDto) {

		const password = await Password.generateRandomPassword(14);

		const hashedPassword = await Password.hashPassword(password);

		const identifier = new Identifier(hashedPassword);

		const user = new User({
			...createUserDto, 
			identifier
		});

		await this.entityManager.save(user);
	}

	async findAll() {
		return await this.usersRepository.find();
	}

	async findOne(id: number) {
		return await this.usersRepository.findOne({
			where: { id },
			relations: { role: true },
		});
	}

	async update(id: number, updateUserDto: UpdateUserDto) {
		const user = await this.usersRepository.findOneBy({ id });
		Object.assign(user, updateUserDto);
		await this.entityManager.save(user);
	}

	async remove(id: number) {
		await this.usersRepository.delete(id);
	}
  
}
