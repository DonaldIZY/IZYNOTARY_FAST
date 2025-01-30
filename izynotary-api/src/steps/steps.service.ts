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

    async updateTwo(id: number, updateStepDto: UpdateStepDto) {
        const step = await this.stepRepository.findOneBy({ id });
        Object.assign(step, updateStepDto);
        await this.entityManager.save(step);

        
        // let customerContact = folder.customer.phone; 
        
        // YOU HAVE TO FIND 
        const username = "izyapp";
        const userPassword = "xxx";
        const apiKey = "ef9ea5780aacb0bfea3639d0491bd4c1";
        const sender = "SVAM";
        const indicatorRegexp = /^225/;

        var receiver = `${
        indicatorRegexp.test(updateStepDto.contact)
            ? updateStepDto.contact
            : "225" + updateStepDto.contact
        }`;
        var message = 
`Acte notarié de ${updateStepDto.procedureType}
Numéro : ${updateStepDto.folderNum}.
Votre document <nom du document est maintenant disponible>`;

        var encodedMessage = encodeURIComponent(message);
        const smsUrl = `http://smspro.svam-ci.com:8080/svam/mmg/Outgoing?username=${username}&password=${userPassword}&apikey=${apiKey}&src=${sender}&dst=${receiver}&text=${encodedMessage}&refnumber=parcAutoPAC&type=web`;

        let a = await fetch(smsUrl);

        console.log("sms response: ", a);
    }

    async remove(id: number) {
        await this.stepRepository.delete(id);
    }

}
