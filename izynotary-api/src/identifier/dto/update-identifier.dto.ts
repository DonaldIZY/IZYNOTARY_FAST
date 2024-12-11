import { PartialType } from '@nestjs/mapped-types';
import { CreateIdentifierDto } from './create-identifier.dto';

export class UpdateIdentifierDto extends PartialType(CreateIdentifierDto) {}
