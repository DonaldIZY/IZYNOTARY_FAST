import { Test, TestingModule } from '@nestjs/testing';
import { IdentifierController } from './identifier.controller';
import { IdentifierService } from './identifier.service';

describe('IdentifierController', () => {
  let controller: IdentifierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IdentifierController],
      providers: [IdentifierService],
    }).compile();

    controller = module.get<IdentifierController>(IdentifierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
