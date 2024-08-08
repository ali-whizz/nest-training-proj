import { Test, TestingModule } from '@nestjs/testing';
import { CustomServieService } from './custom-servie.service';

describe('CustomServieService', () => {
  let service: CustomServieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomServieService],
    }).compile();

    service = module.get<CustomServieService>(CustomServieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
