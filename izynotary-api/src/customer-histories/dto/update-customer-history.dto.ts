import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerHistoryDto } from './create-customer-history.dto';

export class UpdateCustomerHistoryDto extends PartialType(CreateCustomerHistoryDto) {}
