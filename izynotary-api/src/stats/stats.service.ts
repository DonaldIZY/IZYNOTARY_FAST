import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/customers/entities/customer.entity';
import { Folder } from 'src/folders/entities/folder.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class StatsService {

    constructor(
        @InjectRepository(Folder) private readonly folderRepository: Repository<Folder>,
        @InjectRepository(Customer) private readonly customerRepository: Repository<Customer>,
        private readonly entityManager: EntityManager
    ) {}

    async getStats() {

        const procedure = await this.folderRepository.find();
        const customers = await this.customerRepository.find();

        const procStats = {
            totalFolders: procedure.length,
            foldersByProcedureType: procedure.reduce((acc, folder) => {
                acc[folder.procedureType] = (acc[folder.procedureType] || 0) + 1;
                return acc;
            }, {}),
            foldersByStatus: procedure.reduce((acc, folder) => {
                acc[folder.status] = (acc[folder.status] || 0) + 1;
                return acc;
            }, {}),
            foldersByStatusAccordingToType: procedure.reduce((acc, folder) => {
                if (!acc[folder.procedureType]) {
                    acc[folder.procedureType] = {};
                }
                acc[folder.procedureType][folder.status] = (acc[folder.procedureType][folder.status] || 0) + 1;
                return acc;
            }, {})
        };

        const customerStats = {
            totalCustomers: customers.length,
        };

        return {
            procedure: procStats,
            customer: customerStats
        };

    }
}
