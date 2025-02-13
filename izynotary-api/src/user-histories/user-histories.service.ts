import { Injectable } from '@nestjs/common';
import { CreateUserHistoryDto } from './dto/create-user-history.dto';
import { UpdateUserHistoryDto } from './dto/update-user-history.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserHistory } from './entities/user-history.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class UserHistoriesService {
  constructor(
    @InjectRepository(UserHistory)
    private readonly userHistoryRepository: Repository<UserHistory>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createUserHistoryDto: CreateUserHistoryDto) {
    const userHistory = new UserHistory(createUserHistoryDto);
    await this.entityManager.save(userHistory);
  }

  async findAll() {
    return await this.userHistoryRepository.find();
  }

  async findOne(id: number) {
    return await this.userHistoryRepository.findOneBy({ id });
  }

  async update(id: number, updateUserHistoryDto: UpdateUserHistoryDto) {
    const userHistory = await this.userHistoryRepository.findOneBy({ id });
    Object.assign(userHistory, updateUserHistoryDto);
    await this.entityManager.save(userHistory);
  }

  async remove(id: number) {
    await this.userHistoryRepository.delete(id);
  }
}
