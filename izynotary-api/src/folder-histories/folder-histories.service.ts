import { Injectable } from '@nestjs/common';
import { CreateFolderHistoryDto } from './dto/create-folder-history.dto';
import { UpdateFolderHistoryDto } from './dto/update-folder-history.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FolderHistory } from './entities/folder-history.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class FolderHistoriesService {
  constructor(
    @InjectRepository(FolderHistory) 
    private readonly folderHistoryRepository: Repository<FolderHistory>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createFolderHistoryDto: CreateFolderHistoryDto) {
    const folderHistory = new FolderHistory(createFolderHistoryDto);
    await this.entityManager.save(folderHistory);
  }

  async findAll() {
    return await this.folderHistoryRepository.find();
  }

  async findOne(id: number) {
    return await this.folderHistoryRepository.findOneBy({ id });
  }

  async update(id: number, updateFolderHistoryDto: UpdateFolderHistoryDto) {
    const folderHistory = await this.folderHistoryRepository.findOneBy({ id });
    Object.assign(folderHistory, updateFolderHistoryDto);
    await this.entityManager.save(folderHistory);
  }

  async remove(id: number) {
    await this.folderHistoryRepository.delete(id);
  }
}
