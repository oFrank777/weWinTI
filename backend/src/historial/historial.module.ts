import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HistorialService } from './historial.service';
import { HistorialController } from './historial.controller';

import { ReporteResiduo } from '@/residuos/entities/reporte-residuo.entity';
import { Pago } from '@/pagos/entities/pago.entity';

@Module({
  imports: [
    /* ¡Registra los dos repositorios! */
    TypeOrmModule.forFeature([ReporteResiduo, Pago]),
  ],
  providers: [HistorialService],
  controllers: [HistorialController],
})
export class HistorialModule {}
