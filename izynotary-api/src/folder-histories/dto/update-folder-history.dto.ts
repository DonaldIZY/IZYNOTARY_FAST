import { PartialType } from '@nestjs/mapped-types';
import { CreateFolderHistoryDto } from './create-folder-history.dto';

export class UpdateFolderHistoryDto extends PartialType(CreateFolderHistoryDto) {}
