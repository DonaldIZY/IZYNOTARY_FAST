/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Identifier } from 'src/identifier/entities/identifier.entity';
import { EmailService } from 'src/mail/email.service';
import { Role } from 'src/roles/entities/role.entity';
import { Password } from 'src/utils/password.util';
import { EntityManager, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

	constructor(
		@InjectRepository(User) private readonly usersRepository: Repository<User>,
		@InjectRepository(Role) private readonly rolesRepository: Repository<Role>,
		private readonly entityManager: EntityManager,
		private readonly emailService: EmailService
	) { }


	async create(createUserDto: CreateUserDto) {

		const password = await Password.generateRandomPassword(14);

		console.log('Le mot de passe : ', password);

		const hashedValue = await Password.hashPassword(password);

		const identifier = new Identifier({ ...hashedValue });

		const role = await this.rolesRepository.findOneBy({ id: createUserDto.roleId });

		delete createUserDto.roleId;

		const user = new User({
			...createUserDto,
			role
		});

		user.identifier = identifier;

		console.log(user);

		await this.entityManager.save(user);

		// 📨 Envoi de l'e-mail de bienvenue
		await this.emailService.sendEmail(
			user.email,
			'Bienvenue sur IzyNotary !',
			`Bonjour ${user.lastName} ${user.firstName} votre compte a été créé.`,
			`
			<p>Votre compte a été créé avec succès.</p>
			<p>Voici vos informations de connexion :</p>
			<ul>
			  <li><strong>Email :</strong> ${user.email}</li>
			</ul>
			<ul>
			  <li><strong>Mot de passe :</strong> ${password}</li>
			</ul>
			<br/>
			Pour vous connecter, cliquez ici : 
			<br/>
			${process.env.FRONTEND}
		  `
		);
	}

	async findAll() {
		return await this.usersRepository.find({
			where: { superUser: false },
			relations: { role: true },
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
		console.log(user);

		user.lastName = updateUserDto.lastName;
		user.firstName = updateUserDto.firstName;
		user.email = updateUserDto.email;
		user.phoneNumber = updateUserDto.phoneNumber;

		if (updateUserDto.roleId) {
			user.role = await this.rolesRepository.findOneBy({ id: updateUserDto.roleId });
		}

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

}
