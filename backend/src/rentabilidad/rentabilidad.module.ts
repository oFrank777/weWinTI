import { Module } from '@nestjs/common';
import { RentabilidadService } from './rentabilidad.service';
import { RentabilidadController } from './rentabilidad.controller';

@Module({
  providers: [RentabilidadService],
  controllers: [RentabilidadController]
})
export class RentabilidadModule {}
