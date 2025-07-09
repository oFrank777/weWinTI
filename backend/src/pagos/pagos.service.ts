import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Pago } from './entities/pago.entity';
import { CrearPagoDto } from './dto/crear-pago.dto';
import { UsersService } from '@/users/users.service';
import { ResiduosService } from '@/residuos/residuos.service';

@Injectable()
export class PagosService {
  constructor(
    @InjectRepository(Pago) private readonly repo: Repository<Pago>,
    private readonly usersService: UsersService,
    private readonly residuosService: ResiduosService,
  ) {}

  /** Crea el pago y marca el reporte como pagado */
  async crearPago(userId: number, dto: CrearPagoDto): Promise<Pago> {
    const user    = await this.usersService.findOneOrFail(userId);
    const reporte = await this.residuosService.findById(dto.reporteId);
    if (!reporte) throw new NotFoundException('Reporte no encontrado');
    if (reporte.cliente.id !== userId)
      throw new BadRequestException('Reporte no pertenece al usuario');

    const entity = this.repo.create({
      monto:   dto.monto,
      metodo:  dto.metodo,
      cliente: user,
      reporte,
    });

    const pago = await this.repo.save(entity);
    await this.residuosService.marcarPagado(reporte.id);
    return pago;
  }
}
