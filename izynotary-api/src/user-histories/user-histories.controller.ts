import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserHistoriesService } from './user-histories.service';
import { CreateUserHistoryDto } from './dto/create-user-history.dto';
import { UpdateUserHistoryDto } from './dto/update-user-history.dto';

@Controller('user-histories')
export class UserHistoriesController {
  constructor(private readonly userHistoriesService: UserHistoriesService) {}

  @Post()
  async create(@Body() createUserHistoryDto: CreateUserHistoryDto) {
    return this.userHistoriesService.create(createUserHistoryDto);
  }

  @Get()
  async findAll() {
    return this.userHistoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userHistoriesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserHistoryDto: UpdateUserHistoryDto) {
    return this.userHistoriesService.update(+id, updateUserHistoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userHistoriesService.remove(+id);
  }
}
