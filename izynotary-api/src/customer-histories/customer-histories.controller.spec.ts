import { Test, TestingModule } from '@nestjs/testing';
import { CustomerHistoriesController } from './customer-histories.controller';
import { CustomerHistoriesService } from './customer-histories.service';

describe('CustomerHistoriesController', () => {
  let controller: CustomerHistoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerHistoriesController],
      providers: [CustomerHistoriesService],
    }).compile();

    controller = module.get<CustomerHistoriesController>(CustomerHistoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
