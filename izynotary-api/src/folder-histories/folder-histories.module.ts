import { Module } from '@nestjs/common';
import { FolderHistoriesService } from './folder-histories.service';
import { FolderHistoriesController } from './folder-histories.controller';

@Module({
  controllers: [FolderHistoriesController],
  providers: [FolderHistoriesService],
})
export class FolderHistoriesModule {}
