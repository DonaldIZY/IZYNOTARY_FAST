import { PartialType } from '@nestjs/mapped-types';
import { CreateStepDto } from './create-step.dto';

export class UpdateStepDto extends PartialType(CreateStepDto) {
  contact:string;
  folderNum:string;
  procedureType:string;
  uploadedFiles: any;
  documents: any;
  allowedFilesList?: string[];
}
