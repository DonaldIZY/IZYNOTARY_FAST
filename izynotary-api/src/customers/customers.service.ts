import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { EntityManager, Repository } from 'typeorm';
import { Password } from 'src/utils/password.util';
import { Identifier } from 'src/identifier/entities/identifier.entity';

@Injectable()
export class CustomersService {
    emailService: any;

    constructor(
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>,
        private readonly entityManager: EntityManager
    ) {}

    async create(createCustomerDto: CreateCustomerDto) {

        const password = await Password.generateRandomPassword(14);

        console.log('Le mot de passe : ',password);

        const hashedValue = await Password.hashPassword(password);

        const identifier = new Identifier({...hashedValue});

        const customer = new Customer({
            ...createCustomerDto
        });

        customer.identifier = identifier;

        console.log(customer);

        await this.entityManager.save(customer);

        await this.emailService.sendEmail(
			customer.email,
			'Bienvenue sur IzyNotary !',
			`Bonjour ${customer.lastName} ${customer.firstName} votre compte a été créé.`,
			`
			<p>Votre compte a été créé avec succès.</p>
			<p>Voici vos informations de connexion :</p>
			<ul>
			  <li><strong>Email :</strong> ${customer.email}</li>
			</ul>
			<ul>
			  <li><strong>Mot de passe :</strong> ${password}</li>
			</ul>
			<p>Merci d'utiliser IzyNotary ! 🚀</p>
		  `
		);
    }

    async findAll() {
        return await this.customerRepository.find({relations: {folders: true,}});
    }

    async findOne(id: number) {
        return await this.customerRepository.findOne({
            where: { id },
            relations: [ 'folders', 'folders.step', 'folders.assignedTo' ],
        });
    }

    async update(id: number, updateCustomerDto: UpdateCustomerDto) {
        const customer = await this.customerRepository.findOneBy({ id });
        Object.assign(customer, updateCustomerDto);
        await this.entityManager.save(customer);
    }

    async remove(id: number) {
        const customer = await this.customerRepository.findOne({
            where: { id },
            relations: [ 'folders', 'folders.step', 'identifier' ],
        });

        if (!customer) {
			throw new Error("Client non trouvé");
		}

        await this.customerRepository.remove(customer);
    }

}
