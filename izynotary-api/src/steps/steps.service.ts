import { Injectable } from '@nestjs/common';
import { CreateStepDto } from './dto/create-step.dto';
import { UpdateStepDto } from './dto/update-step.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Step } from './entities/step.entity';
import { EntityManager, Repository } from 'typeorm';
import { translateFieldNameToFrench } from 'src/utils/usefulFunctions.util';
import { Folder } from 'src/folders/entities/folder.entity';


@Injectable()
export class StepsService {
  constructor(
    @InjectRepository(Step) private readonly stepRepository: Repository<Step>,
    @InjectRepository(Folder) private readonly folderRepository: Repository<Folder>,
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
    const step = await this.stepRepository.findOne({ 
      where: {id}
    });

    if(!step) {
      console.log("step is null");
    }
    // console.log("updateStepDTO", updateStepDto);

    const folder = await this.folderRepository.findOne({
      where: {folderNum: updateStepDto.folderNum}
    });

    
    let searchedStepIndex = step.steps.findIndex(
      (elem) => elem.action == updateStepDto['action'],
    ); //the index of the step we need

    // console.log('FOUND folder : ', folder);
    // console.log('Id of step : ', id);
    // console.log('FOUND STEP : ', step);

    if(Object.keys(updateStepDto.uploadedFiles).length > 0) {

      // let searchedStep = step.steps.find(
      //   (elem) => elem.action == updateStepDto['action'],
      // ); //the step we need
      // console.log('STEP BEFORE UPDATE : ', searchedStep);
  
      const listOfKeyToUpdate = Object.keys(updateStepDto.uploadedFiles);
  
      for(const key of listOfKeyToUpdate) {
        step.steps[searchedStepIndex].documents[key].path =
          updateStepDto.uploadedFiles[key]; //to change the path of the doc in the database, each key is a document name
        step.steps[searchedStepIndex].documents[key].filled = true;
      }

      if(step.steps.every(stepInDb => stepInDb.status == "Terminé")) {
        folder.status = "Terminé";
  
        await this.entityManager.save(folder);
      }

    }

    if(Object.keys(updateStepDto).includes("comment")) {
      step.steps[searchedStepIndex].comment = updateStepDto["comment"]; 
    }

    if(updateStepDto["status"]) {
      if(["Suspendu", "Arrêté", "En cours"].includes(updateStepDto["status"])) {
        if(["Suspendu", "Arrêté"].includes(updateStepDto["status"])) {
          if(step.steps[searchedStepIndex].status == "En cours") {
            step.steps[searchedStepIndex].status = updateStepDto["status"];
          }else{
            return {
              status: false,
              message: `You can't update a substep with status ${step.steps[searchedStepIndex].status} to status ${updateStepDto["status"]}`,
            };
          }
        }else if(updateStepDto["status"] == "En cours") {
          if(["Suspendu", "Arrêté"].includes(step.steps[searchedStepIndex].status)) {
            step.steps[searchedStepIndex].status = updateStepDto["status"];
          }else{
            return {
              status: false,
              message: `You can't update a substep with status ${step.steps[searchedStepIndex].status} to status ${updateStepDto["status"]}`,
            };
          }
        }

        folder.status = updateStepDto["status"];
        await this.entityManager.save(folder);
      }else{
        return {
          status: false,
          message: `You aren't allowed to change status to ${updateStepDto["status"]}`
        };
      }
    }else{
      //WE HAVE TO CHANGE THE STATUS OF A STEP WHEN ALL OF ITS SUBSTEPS ARE DONE AND WHE DON'T TRY TO CANCEL OR SUSPEND IT
      if(Object.values(step.steps[searchedStepIndex].documents).every(subStep => subStep["filled"] == true)) {
        step.steps[searchedStepIndex].status = "Terminé";
        //WHEN A STEP HAS A STATUS OF DONE, THE NEXT SHOULD HAVE A STATUS OF CURRENT
        if(searchedStepIndex < step.steps.length - 1 && step.steps[searchedStepIndex].status == "Terminé") {
          step.steps[searchedStepIndex + 1].status = "En cours";
        }
      }
    }

    const result = await this.entityManager.save(step);
    
    let searchedStepAfterUpdate = result.steps.find(
      (elem) => elem.action == updateStepDto['action'],
    );
    console.log('STEP AFTER UPDATE : ', searchedStepAfterUpdate);
    console.log('STEP : ', result);

    // YOU HAVE TO FIND
    const username = 'izyapp';
    const userPassword = 'xxx';
    const apiKey = 'ef9ea5780aacb0bfea3639d0491bd4c1';
    const sender = 'SVAM';
    const indicatorRegexp = /^225/;

    var receiver = `${
      indicatorRegexp.test(updateStepDto.contact)
        ? updateStepDto.contact
        : '225' + updateStepDto.contact
    }`;
    var message: string;

    if(updateStepDto["status"]) {
      if(Object.keys(updateStepDto.uploadedFiles).length > 0) {
        message = 
`Acte notarié de ${updateStepDto.procedureType}
Numéro : ${updateStepDto.folderNum}.
${updateStepDto.documents.length > 1 ? 'vos documents ' + updateStepDto.documents.map((elem: string) => translateFieldNameToFrench(elem)).join(', ') + ' sont ' : 'votre documnent ' + updateStepDto.documents.map((elem: string) => translateFieldNameToFrench(elem))[0] + ' est '} maintenant disponible(s).
La procédure est désormais ${updateStepDto["status"]}`;
      }else{
        message = 
`Acte notarié de ${updateStepDto.procedureType}
Numéro : ${updateStepDto.folderNum}.
La procédure est désormais ${updateStepDto["status"]}`;
      }
    }else{
      message = 
`Acte notarié de ${updateStepDto.procedureType}
Numéro : ${updateStepDto.folderNum}.
${updateStepDto.documents.length > 1 ? 'vos documents ' + updateStepDto.documents.map((elem: string) => translateFieldNameToFrench(elem)).join(', ') + ' sont ' : 'votre documnent ' + updateStepDto.documents.map((elem: string) => translateFieldNameToFrench(elem))[0] + ' est '} maintenant disponible(s).`;
    }

    

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
