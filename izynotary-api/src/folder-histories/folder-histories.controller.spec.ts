import { Test, TestingModule } from '@nestjs/testing';
import { FolderHistoriesController } from './folder-histories.controller';
import { FolderHistoriesService } from './folder-histories.service';

describe('FolderHistoriesController', () => {
  let controller: FolderHistoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FolderHistoriesController],
      providers: [FolderHistoriesService],
    }).compile();

    controller = module.get<FolderHistoriesController>(FolderHistoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
