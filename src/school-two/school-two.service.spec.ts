import { Test, TestingModule } from '@nestjs/testing';
import { SchoolTwoService } from './school-two.service';

describe('SchoolTwoService', () => {
  let service: SchoolTwoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchoolTwoService],
    }).compile();

    service = module.get<SchoolTwoService>(SchoolTwoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
