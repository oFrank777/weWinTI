import { Test, TestingModule } from '@nestjs/testing';
import { RentabilidadController } from './rentabilidad.controller';

describe('RentabilidadController', () => {
  let controller: RentabilidadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RentabilidadController],
    }).compile();

    controller = module.get<RentabilidadController>(RentabilidadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
