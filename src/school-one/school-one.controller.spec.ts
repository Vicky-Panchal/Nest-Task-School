import { Test, TestingModule } from '@nestjs/testing';
import { SchoolOneController } from './school-one.controller';

describe('SchoolOneController', () => {
  let controller: SchoolOneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolOneController],
    }).compile();

    controller = module.get<SchoolOneController>(SchoolOneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
