/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Identifier } from 'src/identifier/entities/identifier.entity';
import { EmailService } from 'src/mail/email.service';
import { Password } from 'src/utils/password.util';
import { EntityManager, Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {

    constructor(
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>,
        private readonly entityManager: EntityManager,
        private readonly emailService: EmailService
    ) { }

    async create(createCustomerDto: CreateCustomerDto) {

        const customer = new Customer({
            ...createCustomerDto, platformAccess: JSON.parse(createCustomerDto.platformAccess.toString())
        });

        let password: any;

        if (JSON.parse(createCustomerDto.platformAccess.toString())) {
            password = await Password.generateRandomPassword(14);

            console.log('Le mot de passe : ', password);

            const hashedValue = await Password.hashPassword(password);

            const identifier = new Identifier({ ...hashedValue });

            customer.identifier = identifier;
        }

        console.log(customer);

        await this.entityManager.save(customer);

        if (JSON.parse(createCustomerDto.platformAccess.toString())) {
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
                <p>Merci d'utiliser IzyNotary!</p>
            `
            );
        }

    }

    async findAll() {
        return await this.customerRepository.find({ relations: { folders: true, } });
    }

    async findOne(id: number) {
        return await this.customerRepository.findOne({
            where: { id },
            relations: ['folders', 'folders.step', 'folders.assignedTo'],
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
            relations: ['folders', 'folders.step', 'identifier'],
        });

        if (!customer) {
            throw new Error("Client non trouvé");
        }

        await this.customerRepository.remove(customer);
    }

}
