import { Test, TestingModule } from '@nestjs/testing';
import { SchoolOneService } from './school-one.service';

describe('SchoolOneService', () => {
  let service: SchoolOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchoolOneService],
    }).compile();

    service = module.get<SchoolOneService>(SchoolOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
