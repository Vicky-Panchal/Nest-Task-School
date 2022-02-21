import { Test, TestingModule } from '@nestjs/testing';
import { SchoolTwoController } from './school-two.controller';

describe('SchoolTwoController', () => {
  let controller: SchoolTwoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolTwoController],
    }).compile();

    controller = module.get<SchoolTwoController>(SchoolTwoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
