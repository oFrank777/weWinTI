import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
import { ResiduosService } from '../residuos.service';
import { ReportarResiduoDto } from '../dto/reportar-residuo.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard }   from '../../auth/guards/roles.guard';
import { NotificacionesService } from '@/notificaciones/notificaciones.service';
import { Roles }        from '../../auth/decorators/roles.decorator';
import { Role } from '@/users/entities/user.entity';

@Controller('cliente/residuos')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.Cliente)
export class ClienteResiduosController {
  constructor(
    private residuosService: ResiduosService,
    private notificacionesService: NotificacionesService,
  ) {}

  /** Contenedor lleno → crea reporte y notifica */
  @Post('reportar')
  async reportar(@Req() req, @Body() dto: ReportarResiduoDto) {
    const reporte = await this.residuosService.reportarResiduo(req.user.id, dto);
    await this.notificacionesService.nuevaSolicitudRecojo(reporte);
    return { message: 'Reporte registrado', reporteId: reporte.id };
  }
}