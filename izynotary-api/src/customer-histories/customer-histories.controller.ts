import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerHistoriesService } from './customer-histories.service';
import { CreateCustomerHistoryDto } from './dto/create-customer-history.dto';
import { UpdateCustomerHistoryDto } from './dto/update-customer-history.dto';

@Controller('customer-histories')
export class CustomerHistoriesController {
  constructor(private readonly customerHistoriesService: CustomerHistoriesService) {}

  @Post()
  async create(@Body() createCustomerHistoryDto: CreateCustomerHistoryDto) {
    return this.customerHistoriesService.create(createCustomerHistoryDto);
  }

  @Get()
  async findAll() {
    return this.customerHistoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.customerHistoriesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCustomerHistoryDto: UpdateCustomerHistoryDto) {
    return this.customerHistoriesService.update(+id, updateCustomerHistoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.customerHistoriesService.remove(+id);
  }
}
