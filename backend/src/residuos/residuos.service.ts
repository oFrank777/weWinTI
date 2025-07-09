import {
  Injectable,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UsersService } from '@/users/users.service';
import {
  ReporteResiduo,
  EstadoReporte,
} from './entities/reporte-residuo.entity';
import { ReportarResiduoDto } from './dto/reportar-residuo.dto';

@Injectable()
export class ResiduosService {
  constructor(
    @InjectRepository(ReporteResiduo)
    private readonly repo: Repository<ReporteResiduo>,
    private readonly usersService: UsersService,
  ) {}

  /* ------------ CRUD CLIENTE ------------ */
  async reportarResiduo(userId: number, dto: ReportarResiduoDto) {
    // Garantizamos que el usuario existe (no puede ser null)
    const user = await this.usersService.findOneOrFail(userId);

    const reporte = this.repo.create({
      ...dto,
      cliente: user,
      estado: EstadoReporte.PENDIENTE_PAGO,
    });

    return this.repo.save(reporte);
  }

  async marcarPagado(reporteId: number) {
    const rep = await this.repo.findOneBy({ id: reporteId });
    if (!rep) throw new BadRequestException('Reporte no encontrado');

    rep.estado = EstadoReporte.PAGADO;
    return this.repo.save(rep);
  }

  /* util */
  findById(id: number) {
    return this.repo.findOne({ where: { id } });
  }
}
