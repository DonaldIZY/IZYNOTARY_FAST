import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles} from '@nestjs/common';
import { AnyFilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';
import { StepsService } from './steps.service';
import { CreateStepDto } from './dto/create-step.dto';
import { UpdateStepDto } from './dto/update-step.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as fs from 'fs';

function formatProcedureType (val: String) {
  let result: String;

  if(val.toLowerCase() == "constitution de société") {
    result = "companyFormation";
  }else if(val.toLowerCase() == "modification de société") {
    result = "companyModification";
  }else if(val.toLowerCase() == "vente") {
    result = "selling";
  }else if(val.toLowerCase() == "succession de biens mobiliers") {
    result = "transferOfMovableProperty";
  }else if(val.toLowerCase() == "succession de biens immobiliers") {
    result = "transferOfRealEstate";
  }/*else if(val.toLowerCase() == "crédit") {

  }*/
  return result;
}


@Controller('steps')
export class StepsController {
  constructor(private readonly stepsService: StepsService) {}

  @Post()
  async create(@Body() createStepDto: CreateStepDto) {
    return this.stepsService.create(createStepDto);
  }

  @Get()
  async findAll() {
    return this.stepsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.stepsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateStepDto: UpdateStepDto) {
    return this.stepsService.update(+id, updateStepDto);
  }

  @Patch('update/:id')
  @UseInterceptors(
    AnyFilesInterceptor({
      storage: diskStorage({
        destination: (req, file, cb) => {

          

          // req.body.procedureType = formatProcedureType(req.body.procedureType);

          const folderNum = req.body.folderNum; // Récupération du numéro de dossier
          const uploadPath = `./uploads/procedures/${formatProcedureType(req.body.procedureType)}/${folderNum}`;

          // Vérifier et créer le dossier si nécessaire
          if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
          }

          cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
          const ext = extname(file.originalname);
          cb(null, `${file.fieldname}${ext}`);
        },
      }),
    }),
  )
  
  async updateTwo(
    @Param('id') id: string,
    @UploadedFiles() files: Express.Multer.File[],
    @Body() updateStepDto: UpdateStepDto,
  ) {
    console.log("ID : ", id);
    console.log('FILES : ',files);

    if(files.length > 0) {
      // Construction de l'objet uploadedFiles avec les chemins des fichiers
      const uploadedFiles = {};
      var filenameList = [];
      files.forEach((file) => {
        uploadedFiles[file.fieldname] = `/uploads/procedures/${formatProcedureType(updateStepDto.procedureType)}/${updateStepDto.folderNum}/${file.filename}`;
        filenameList.push(file.fieldname);
      });

      // Assignation du champ uploadedFiles au DTO
      updateStepDto.uploadedFiles = uploadedFiles;
      updateStepDto.documents = filenameList;
    }else{
      updateStepDto.uploadedFiles = {};
      updateStepDto.documents =  [];
    }

    if(updateStepDto.allowedFilesList && !(updateStepDto.allowedFilesList instanceof Array)) {
      updateStepDto.allowedFilesList = [updateStepDto.allowedFilesList];
    }

    if(updateStepDto.disallowedFilesList && !(updateStepDto.disallowedFilesList instanceof Array)) {
      updateStepDto.disallowedFilesList = [updateStepDto.disallowedFilesList];
    }


    console.log("Final folder: ", updateStepDto);
    // if(updateStepDto['subStepStatus'] == 'null') {
    //   delete updateStepDto['subStepStatus'];
    //   console.log("Final folder after deletion : ", updateStepDto);
    // }

    return this.stepsService.updateTwo(+id, updateStepDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.stepsService.remove(+id);
  }
}



