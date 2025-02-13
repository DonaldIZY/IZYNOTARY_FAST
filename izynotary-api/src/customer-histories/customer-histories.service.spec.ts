import { Test, TestingModule } from '@nestjs/testing';
import { CustomerHistoriesService } from './customer-histories.service';

describe('CustomerHistoriesService', () => {
  let service: CustomerHistoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerHistoriesService],
    }).compile();

    service = module.get<CustomerHistoriesService>(CustomerHistoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
