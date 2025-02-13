import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FolderHistoriesService } from './folder-histories.service';
import { CreateFolderHistoryDto } from './dto/create-folder-history.dto';
import { UpdateFolderHistoryDto } from './dto/update-folder-history.dto';

@Controller('folder-histories')
export class FolderHistoriesController {
  constructor(private readonly folderHistoriesService: FolderHistoriesService) {}

  @Post()
  async create(@Body() createFolderHistoryDto: CreateFolderHistoryDto) {
    return this.folderHistoriesService.create(createFolderHistoryDto);
  }

  @Get()
  async findAll() {
    return this.folderHistoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.folderHistoriesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFolderHistoryDto: UpdateFolderHistoryDto) {
    return this.folderHistoriesService.update(+id, updateFolderHistoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.folderHistoriesService.remove(+id);
  }
}
