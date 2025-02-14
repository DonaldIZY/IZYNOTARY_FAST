import { Module } from '@nestjs/common';
import { FolderHistoriesService } from './folder-histories.service';
import { FolderHistoriesController } from './folder-histories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FolderHistory } from './entities/folder-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FolderHistory])],
  controllers: [FolderHistoriesController],
  providers: [FolderHistoriesService],
})
export class FolderHistoriesModule {}
