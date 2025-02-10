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

        const procedure = await this.folderRepository.find({relations: ["folders", "folders.step"]});
        const customers = await this.customerRepository.find();

        const durations = {};
        procedure.forEach(folder => {
            
            const procedureType = folder.procedureType;
            const steps = folder.step.steps;

            if (!durations[procedureType]) {
                durations[procedureType] = {};
            }

            steps.forEach(step => {
                const stepAction = step.action;

                if (!durations[procedureType][stepAction]) {
                    durations[procedureType][stepAction] = { totalDuration: 0, count: 0 };
                }

                if (step.startDate && step.endDate) {
                    const start = new Date(step.startDate).getTime();
                    const end = new Date(step.endDate).getTime();
                    const duration = (end - start) / (1000 * 60 * 60 * 24); // Calcul de la durée en jour
                    durations[procedureType][stepAction].totalDuration += duration;
                    durations[procedureType][stepAction].count++;
                }
            });
        });

        // Calcul des durées moyennes par type de procédure et par étape
        const stepDurationsByTypeAccordingToSteps = {};

        for (const procedureType in durations) {
            stepDurationsByTypeAccordingToSteps[procedureType] = {};

            for (const stepAction in durations[procedureType]) {
                const totalDuration = durations[procedureType][stepAction].totalDuration;
                const count = durations[procedureType][stepAction].count;
                stepDurationsByTypeAccordingToSteps[procedureType][stepAction] = totalDuration / count;
            }
        }

        const procStats = {
            'totalFolders': procedure.length,
            'foldersByProcedureType': procedure.reduce((acc, folder) => {
                acc[folder.procedureType] = (acc[folder.procedureType] || 0) + 1;
                return acc;
            }, {}),
            'foldersByStatus': procedure.reduce((acc, folder) => {
                acc[folder.status] = (acc[folder.status] || 0) + 1;
                return acc;
            }, {}),
            'foldersByStatusAccordingToType': procedure.reduce((acc, folder) => {
                if (!acc[folder.procedureType]) {
                    acc[folder.procedureType] = {};
                }
                acc[folder.procedureType][folder.status] = (acc[folder.procedureType][folder.status] || 0) + 1;
                return acc;
            }, {}),
            'stepDurationsByTypeAccordingToSteps': stepDurationsByTypeAccordingToSteps,
        };

        
        const customerStats = {
            'totalCustomers': customers.length,
        };

        return {
            procedure: procStats,
            customer: customerStats
        };

    }
}
