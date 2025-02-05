import { Injectable } from '@nestjs/common';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Seller } from './entities/seller.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class SellersService {

    constructor(
        @InjectRepository(Seller)
        private readonly sellersRepository: Repository<Seller>,
        private readonly entityManager: EntityManager
    ) {}
    async create(createSellerDto: CreateSellerDto) {
        const seller = new Seller(createSellerDto);
        await this.entityManager.save(seller);
    }

    async findAll() {
        return await this.sellersRepository.find();
    }

    async findOne(id: number) {
        return await this.sellersRepository.findOneBy({ id });
    }

    async update(id: number, updateSellerDto: UpdateSellerDto) {
        const seller = await this.sellersRepository.findOneBy({ id });
        Object.assign(seller, updateSellerDto);
        await this.entityManager.save(seller);
    }

    async remove(id: number) {
        await this.sellersRepository.delete(id);
    }
}
