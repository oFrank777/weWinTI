import { Test, TestingModule } from '@nestjs/testing';
import { PesajesService } from './pesajes.service';

describe('PesajesService', () => {
  let service: PesajesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PesajesService],
    }).compile();

    service = module.get<PesajesService>(PesajesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
