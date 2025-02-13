import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class CustomersService {

    constructor(
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>,
        private readonly entityManager: EntityManager
    ) {}

    async create(createCustomerDto: CreateCustomerDto) {
        const customer = new Customer(createCustomerDto);
        await this.entityManager.save(customer);
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
        await this.customerRepository.delete(id);
    }

}
