import { Test, TestingModule } from '@nestjs/testing';
import { RentabilidadService } from './rentabilidad.service';

describe('RentabilidadService', () => {
  let service: RentabilidadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentabilidadService],
    }).compile();

    service = module.get<RentabilidadService>(RentabilidadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
