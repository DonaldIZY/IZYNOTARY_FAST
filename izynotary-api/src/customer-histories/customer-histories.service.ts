import { Injectable } from '@nestjs/common';
import { CreateCustomerHistoryDto } from './dto/create-customer-history.dto';
import { UpdateCustomerHistoryDto } from './dto/update-customer-history.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerHistory } from './entities/customer-history.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class CustomerHistoriesService {
  constructor(
    @InjectRepository(CustomerHistory)
    private readonly customerHistoryRepository: Repository<CustomerHistory>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createCustomerHistoryDto: CreateCustomerHistoryDto) {
    const customerHistory = new CustomerHistory(createCustomerHistoryDto);
    await this.entityManager.save(customerHistory);
  }

  async findAll() {
    return await this.customerHistoryRepository.find();
  }

  async findOne(id: number) {
    return await this.customerHistoryRepository.findOneBy({ id });
  }

  async update(id: number, updateCustomerHistoryDto: UpdateCustomerHistoryDto) {
    const customerHistory = await this.customerHistoryRepository.findOneBy({ id });
    Object.assign(customerHistory, updateCustomerHistoryDto);
    await this.entityManager.save(customerHistory);
  }

  async remove(id: number) {
    await this.customerHistoryRepository.delete(id);
  }
}
