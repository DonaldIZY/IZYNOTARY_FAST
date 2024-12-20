import { Injectable } from '@nestjs/common';
import { CreateStepDto } from './dto/create-step.dto';
import { UpdateStepDto } from './dto/update-step.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Step } from './entities/step.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class StepsService {

    constructor(
        @InjectRepository(Step)
        private readonly stepRepository: Repository<Step>,
        private readonly entityManager: EntityManager
    ) {}

    async create(createStepDto: CreateStepDto) {
        const step = new Step(createStepDto);
        await this.entityManager.save(step);
    }

    async findAll() {
        return await this.stepRepository.find();
    }

    async findOne(id: number) {
        return await this.stepRepository.findOneBy({ id });
    }

    async update(id: number, updateStepDto: UpdateStepDto) {
        const step = await this.stepRepository.findOneBy({ id });
        Object.assign(step, updateStepDto);
        await this.entityManager.save(step);
    }

    async remove(id: number) {
        await this.stepRepository.delete(id);
    }

}
