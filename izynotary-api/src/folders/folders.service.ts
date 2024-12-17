import { Injectable } from '@nestjs/common';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Folder } from './entities/folder.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class FoldersService {

    constructor(
        @InjectRepository(Folder)
        private readonly folderRepository: Repository<Folder>,
        private readonly entityManager: EntityManager
    ) {}

    async create(createFolderDto: CreateFolderDto) {
        const folder = new Folder(createFolderDto);
        await this.entityManager.save(folder);
    }

    async findAll() {
        return await this.folderRepository.find();
    }

    async findOne(id: number) {
        return await this.folderRepository.findOneBy({ id });
    }

    async update(id: number, updateFolderDto: UpdateFolderDto) {
        const folder = await this.folderRepository.findOneBy({ id });
        Object.assign(folder, updateFolderDto);
        await this.entityManager.save(folder);
    }

    async remove(id: number) {
        await this.folderRepository.delete(id);
    }
}
