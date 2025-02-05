import { Injectable } from '@nestjs/common';
import { CreateStepDto } from './dto/create-step.dto';
import { UpdateStepDto } from './dto/update-step.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Step } from './entities/step.entity';
import { EntityManager, Repository } from 'typeorm';
import { translateFieldNameToFrench } from 'src/utils/usefulFunctions.util';

@Injectable()
export class StepsService {
  constructor(
    @InjectRepository(Step)
    private readonly stepRepository: Repository<Step>,
    private readonly entityManager: EntityManager,
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
    console.log('Id of step : ', id);
    console.log('FOUND STEP : ', step);

    let searchedStepIndex = step.steps.findIndex(
      (elem) => elem.action == updateStepDto['action'],
    ); //the index of the step we need
    let searchedStep = step.steps.find(
      (elem) => elem.action == updateStepDto['action'],
    ); //the step we need
    console.log('STEP BEFORE UPDATE : ', searchedStep);

    const listOfKeyToUpdate = Object.keys(updateStepDto.uploadedFiles);

    for (const key of listOfKeyToUpdate) {
      step.steps[searchedStepIndex].documents[key].path =
        updateStepDto.uploadedFiles[key]; //to change the path of the doc in the database, each key is a document name
      step.steps[searchedStepIndex].documents[key].filled = true;
    }

    async update(id: number, updateStepDto: UpdateStepDto) {
        const step = await this.stepRepository.findOneBy({ id });
        Object.assign(step, updateStepDto);
        await this.entityManager.save(step);
    }

    async updateTwo(id: number, updateStepDto: UpdateStepDto) {
        const step = await this.stepRepository.findOneBy({ id });
        console.log("Id of step : ", id);
        console.log("FOUND STEP : ", step);

        let searchedStepIndex = step.steps.findIndex(elem => elem.action == updateStepDto["action"]); //the index of the step we need
        let searchedStep = step.steps.find(elem => elem.action == updateStepDto["action"]); //the step we need
        console.log("STEP BEFORE UPDATE : ", searchedStep);

        const listOfKeyToUpdate = Object.keys(updateStepDto.uploadedFiles);

        for(const key of listOfKeyToUpdate) {
            step.steps[searchedStepIndex].documents[key].path = updateStepDto.uploadedFiles[key]; //to change the path of the doc in the database, each key is a document name
            step.steps[searchedStepIndex].documents[key].filled = true;
        }

        // step.steps[searchedStepIndex] = searchedStep;

        const result = await this.entityManager.save(step);
        let searchedStepAfterUpdate = result.steps.find(elem => elem.action == updateStepDto["action"]);
        console.log("STEP AFTER UPDATE : ", searchedStepAfterUpdate);
        console.log("STEP : ", result);

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
        ${updateStepDto.documents.length > 1 ? "vos documents " + updateStepDto.documents.map((elem: string) => translateFieldNameToFrench(elem)).join(", ") + "sont " : "votre documnent " + updateStepDto.documents.map((elem: string) => translateFieldNameToFrench(elem))[0] + " est " } maintenant disponible(s).`;

    var encodedMessage = encodeURIComponent(message);
    const smsUrl = `http://smspro.svam-ci.com:8080/svam/mmg/Outgoing?username=${username}&password=${userPassword}&apikey=${apiKey}&src=${sender}&dst=${receiver}&text=${encodedMessage}&refnumber=parcAutoPAC&type=web`;

    let a = await fetch(smsUrl);
    console.log('sms response : ', a);

    return {
      status: true,
      message: 'Procedure updated successfully',
    };
  }

  async remove(id: number) {
    await this.stepRepository.delete(id);
  }
}
