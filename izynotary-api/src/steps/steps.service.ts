/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Folder } from 'src/folders/entities/folder.entity';
import { translateFieldNameToFrench } from 'src/utils/usefulFunctions.util';
import { EntityManager, Repository } from 'typeorm';
import { CreateStepDto } from './dto/create-step.dto';
import { UpdateStepDto } from './dto/update-step.dto';
import { Step } from './entities/step.entity';


@Injectable()
export class StepsService {
  constructor(
    @InjectRepository(Step) private readonly stepRepository: Repository<Step>,
    @InjectRepository(Folder) private readonly folderRepository: Repository<Folder>,
    private readonly entityManager: EntityManager,
  ) { }

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
      where: { id }
    });

    // if(!step) {
    //   console.log("step is null");
    // }
    // console.log("updateStepDTO", updateStepDto);

    const folder = await this.folderRepository.findOne({
      where: { folderNum: updateStepDto.folderNum }
    });


    let searchedStepIndex = step.steps.findIndex(
      (elem) => elem.action == updateStepDto['action'],
    ); //the index of the step we need

    // console.log('FOUND folder : ', folder);
    // console.log('Id of step : ', id);
    // console.log('FOUND STEP : ', step);

    if (updateStepDto['action'] == 'Fourniture des pièces') {
      if (updateStepDto.allowedFilesList && updateStepDto.allowedFilesList?.length > 0) {
        console.log('SUBSTEP DOC : ', step.steps[searchedStepIndex].documents);
        for (const docName of updateStepDto.allowedFilesList) {

          step.steps[searchedStepIndex].documents[docName].allowed = true;
        }
      }
      if (updateStepDto.disallowedFilesList && updateStepDto.disallowedFilesList?.length > 0) {
        console.log('SUBSTEP DOC : ', step.steps[searchedStepIndex].documents);
        for (const docName of updateStepDto.disallowedFilesList) {
          step.steps[searchedStepIndex].documents[docName].disallowed = true;
        }
      }
    }

    if (Object.keys(updateStepDto.uploadedFiles)?.length > 0) {

      // let searchedStep = step.steps.find(
      //   (elem) => elem.action == updateStepDto['action'],
      // ); //the step we need
      // console.log('STEP BEFORE UPDATE : ', searchedStep);

      const listOfKeyToUpdate = Object.keys(updateStepDto.uploadedFiles);

      for (const key of listOfKeyToUpdate) {
        step.steps[searchedStepIndex].documents[key].path =
          updateStepDto.uploadedFiles[key]; //to change the path of the doc in the database, each key is a document name
        step.steps[searchedStepIndex].documents[key].filled = true;
        if (updateStepDto["sender"] && updateStepDto["sender"] == "notairesquad") { //Don't change this until you change the front change (the sender key in formdata)
          step.steps[searchedStepIndex].documents[key].allowed = true;
        }
        if (step.steps[searchedStepIndex].documents[key].disallowed) {
          step.steps[searchedStepIndex].documents[key].disallowed = false;
        }

      }

      var count = 0;
      var countDoc = 0;

      for (const elem of step.steps) {
        for (const docValue of Object.values(elem.documents)) {
          if (docValue["filled"]) {
            count++;
          }
          countDoc++;
        }
      }

      folder.progression = count / countDoc

      if (step.steps.every(stepInDb => stepInDb.status == "Terminé")) {
        folder.status = "Terminé";
      }

      await this.entityManager.save(folder);
    }

    if (Object.keys(updateStepDto).includes("comment")) {
      step.steps[searchedStepIndex].comment = updateStepDto["comment"];
    }

    if (updateStepDto["subStepStatus"]) {

      if (["Suspendu", "Arrêté", "En cours"].includes(updateStepDto["subStepStatus"])) {
        if (["Suspendu", "Arrêté"].includes(updateStepDto["subStepStatus"])) {
          if (step.steps[searchedStepIndex].status == "En cours") {
            step.steps[searchedStepIndex].status = updateStepDto["subStepStatus"];
          } else {
            return {
              status: false,
              message: `You can't update a substep with status ${step.steps[searchedStepIndex].status} to status ${updateStepDto["subStepStatus"]}`,
            };
          }
        } else if (updateStepDto["subStepStatus"] == "En cours") {
          if (["Suspendu", "Arrêté"].includes(step.steps[searchedStepIndex].status)) {
            let documentsList = Object.values(step.steps[searchedStepIndex].documents);
            if (documentsList.every(elem => elem["filled"] == true)) {
              step.steps[searchedStepIndex].status = "Terminé";
              //WHEN A STEP HAS A STATUS OF DONE (Terminé), THE NEXT SHOULD HAVE A STATUS OF CURRENT (En cours)
              if (searchedStepIndex < step.steps.length - 1 && step.steps[searchedStepIndex].status == "Terminé") {
                step.steps[searchedStepIndex + 1].status = "En cours";
              }
            } else {
              step.steps[searchedStepIndex].status = updateStepDto["subStepStatus"];
            }

          } else {
            return {
              status: false,
              message: `You can't update a substep with status ${step.steps[searchedStepIndex].status} to status ${updateStepDto["subStepStatus"]}`,
            };
          }
        }

        folder.status = updateStepDto["subStepStatus"];
        await this.entityManager.save(folder);
      } else {
        return {
          status: false,
          message: `You aren't allowed to change status to ${updateStepDto["subStepStatus"]}`
        };
      }

    } else {
      if (Object.values(step.steps[searchedStepIndex].documents).every(subStep => subStep["filled"] == true)) {
        step.steps[searchedStepIndex].status = "Terminé";
        //WHEN A STEP HAS A STATUS OF DONE (Terminé), THE NEXT SHOULD HAVE A STATUS OF CURRENT (En cours)
        if (searchedStepIndex < step.steps.length - 1 && step.steps[searchedStepIndex].status == "Terminé") {
          step.steps[searchedStepIndex + 1].status = "En cours";
        }
      }

      if (step.steps.every(stepInDb => stepInDb.status == "Terminé")) {
        folder.status = "Terminé";

        await this.entityManager.save(folder);
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

    var receiver = `${indicatorRegexp.test(updateStepDto.contact)
      ? updateStepDto.contact
      : '225' + updateStepDto.contact
      }`;
    var message: string =
      `Acte notarié de ${updateStepDto.procedureType}
Numéro : ${updateStepDto.folderNum}.`;

    if (!['fourniture des pièces', 'signature des actes'].includes(updateStepDto['action'].toLowerCase())) {
      if (updateStepDto["subStepStatus"]) {
        if (Object.keys(updateStepDto.uploadedFiles).length > 0) {
          message +=
            `
${updateStepDto.documents.length > 1 ? 'Vos documents ' + updateStepDto.documents.map((elem: string) => translateFieldNameToFrench(elem)).join(', ') + ' sont ' : 'Votre document ' + updateStepDto.documents.map((elem: string) => translateFieldNameToFrench(elem))[0] + ' est '} maintenant disponible(s).
La procédure est désormais ${updateStepDto["subStepStatus"]}.`;
        } else {
          message +=
            `
La procédure est désormais ${updateStepDto["subStepStatus"]}.`;
        }
      } else {
        message +=
          `
${updateStepDto.documents.length > 1 ? 'Vos documents ' + updateStepDto.documents.map((elem: string) => translateFieldNameToFrench(elem)).join(', ') + ' sont ' : 'Votre document ' + updateStepDto.documents.map((elem: string) => translateFieldNameToFrench(elem))[0] + ' est '} maintenant disponible(s).`;
      }
    }

    if (updateStepDto['action'].toLowerCase() == "signature des actes") {
      if (updateStepDto["subStepStatus"]) {
        if (Object.keys(updateStepDto.uploadedFiles).length > 0) {
          message +=
            `
Vos actes sont maintenant disponibles, veuillez vous rendre chez le notaire pour procéder à la signature.
La procédure est désormais ${updateStepDto["subStepStatus"]}.`;
        } else {
          message +=
            `
La procédure est désormais ${updateStepDto["subStepStatus"]}.`;
        }
      } else {
        message +=
          `
${updateStepDto.documents?.length > 1 ? 'Vos documents ' + updateStepDto.documents.map((elem: string) => translateFieldNameToFrench(elem)).join(', ') + ' sont maintenant disponibles' : 'Votre documnent ' + updateStepDto.documents.map((elem: string) => translateFieldNameToFrench(elem))[0] + ' est maintenant disponible'}.`;
      }
    }

    if (updateStepDto.allowedFilesList && updateStepDto.allowedFilesList?.length > 0) {
      message +=
        `
${updateStepDto.allowedFilesList?.length > 1 ? 'Les documents' : 'Le document'} ${updateStepDto.allowedFilesList.map((elem: string) => translateFieldNameToFrench(elem)).join(', ')} ${updateStepDto.allowedFilesList?.length > 1 ? 'ont été validés' : 'a été validé'}.`;
    }

    if (updateStepDto.disallowedFilesList && updateStepDto.disallowedFilesList?.length > 0) {
      message +=
        `
${updateStepDto.disallowedFilesList?.length > 1 ? 'Les documents' : 'Le document'} ${updateStepDto.disallowedFilesList.map((elem: string) => translateFieldNameToFrench(elem)).join(', ')} ${updateStepDto.disallowedFilesList?.length > 1 ? 'ont été refusés' : 'a été refusé'}, veuillez en fournir ${updateStepDto.disallowedFilesList.length > 1 ? "d'autres" : 'un autre'}.`;
    }


    var encodedMessage = encodeURIComponent(message);
    const smsUrl = `http://smspro.svam-ci.com:8080/svam/mmg/Outgoing?username=${username}&password=${userPassword}&apikey=${apiKey}&src=${sender}&dst=${receiver}&text=${encodedMessage}&refnumber=parcAutoPAC&type=web`;

    if ((updateStepDto['action'].toLowerCase() == "fourniture des pièces" && (updateStepDto.allowedFilesList?.length > 0 || updateStepDto.disallowedFilesList?.length > 0 || updateStepDto["subStepStatus"])) || (updateStepDto['action'].toLowerCase() != "fourniture des pièces" && (Object.keys(updateStepDto.uploadedFiles).length > 0 || updateStepDto["subStepStatus"]))) {
      let a = await fetch(smsUrl);
      console.log('sms response : ', a);
    }

    return {
      status: true,
      message: 'Procedure updated successfully',
    };
  }

  async remove(id: number) {
    await this.stepRepository.delete(id);
  }
}
