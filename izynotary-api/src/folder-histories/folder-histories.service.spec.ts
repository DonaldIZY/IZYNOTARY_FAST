import { Test, TestingModule } from '@nestjs/testing';
import { FolderHistoriesService } from './folder-histories.service';

describe('FolderHistoriesService', () => {
  let service: FolderHistoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FolderHistoriesService],
    }).compile();

    service = module.get<FolderHistoriesService>(FolderHistoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
