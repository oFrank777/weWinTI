import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ReporteResiduo } from '@/residuos/entities/reporte-residuo.entity';
import { Pago } from '@/pagos/entities/pago.entity';

@Injectable()
export class HistorialService {
  constructor(
    @InjectRepository(ReporteResiduo)
    private readonly reporteRepo: Repository<ReporteResiduo>,

    @InjectRepository(Pago)
    private readonly pagoRepo: Repository<Pago>,
  ) {}

  async getHistorialCliente(userId: number) {
    const reportes = await this.reporteRepo.find({
      where: { cliente: { id: userId } },
      order: { createdAt: 'DESC' },
    });

    const pagos = await this.pagoRepo.find({
      where: { cliente: { id: userId } },
      order: { createdAt: 'DESC' },
    });

    return { reportes, pagos };
  }
}
