import { Injectable, Logger } from '@nestjs/common';
import { ReporteResiduo } from '@/residuos/entities/reporte-residuo.entity';
import { Pago } from '@/pagos/entities/pago.entity';

@Injectable()
export class NotificacionesService {
  private logger = new Logger(NotificacionesService.name);

  async nuevaSolicitudRecojo(reporte: ReporteResiduo) {
    this.logger.log(`Nueva solicitud de recojo #${reporte.id}`);
    return true;
  }

  async nuevoPagoCliente(pago: Pago) {
    this.logger.log(`Pago #${pago.id} registrado`);
    return true;
  }
}
