import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Identifier } from 'src/identifier/entities/identifier.entity';
import { Password } from 'src/utils/password.util';
import { Role } from 'src/roles/entities/role.entity';

@Injectable()
export class UsersService {

	constructor(
		@InjectRepository(User) private readonly usersRepository: Repository<User>,
		@InjectRepository(Role) private readonly rolesRepository: Repository<Role>,
		private readonly entityManager: EntityManager
	) {}

	async create(createUserDto: CreateUserDto) {

		const password = await Password.generateRandomPassword(14);

		console.log('Le mot de passe : ',password);

		const hashedValue = await Password.hashPassword(password);

		const identifier = new Identifier({...hashedValue});

		const role = await this.rolesRepository.findOneBy({ id: createUserDto.roleId });

		delete createUserDto.roleId;

		const user = new User({
			...createUserDto,
			role
		});

		user.identifier = identifier;

		console.log(user);

		await this.entityManager.save(user);
	}

	async findAll() {
		return await this.usersRepository.find({ 
			relations: { role:true },
		});
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
		const user = await this.usersRepository.findOne({
			where: { id },
			relations: { identifier: true }, // Charge explicitement l'identifier
		});
	
		if (!user) {
			throw new Error("Utilisateur non trouvé");
		}
	
		await this.usersRepository.remove(user);
	}

	async validateUser(email: string, password: string) {
		const user = await this.usersRepository.findOne({
			where: { email },
            relations: { role: true, identifier: true},
		});

		if (user && (await Password.validatePassword(password, user.identifier.hashedValue))) {
            return user;
        }
		return null;
	}
  
}
