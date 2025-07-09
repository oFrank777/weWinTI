import { Test, TestingModule } from '@nestjs/testing';
import { PesajesController } from './pesajes.controller';

describe('PesajesController', () => {
  let controller: PesajesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PesajesController],
    }).compile();

    controller = module.get<PesajesController>(PesajesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
