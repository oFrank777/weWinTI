import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { NotificacionesService } from '@/notificaciones/notificaciones.service';
import { CrearPagoDto } from './dto/crear-pago.dto';
import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import { RolesGuard } from '@/auth/guards/roles.guard';
import { Roles } from '@/auth/decorators/roles.decorator';
import { Role } from '@/users/entities/user.entity';

@Controller('cliente/pagos')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.Cliente)
export class ClientePagosController {
  constructor(
    private readonly pagosService: PagosService,
    private readonly notificaciones: NotificacionesService,
  ) {}

  @Post()
  async pagar(@Req() req, @Body() dto: CrearPagoDto) {
    const pago = await this.pagosService.crearPago(req.user.id, dto);
    await this.notificaciones.nuevoPagoCliente(pago);
    return { message: 'Pago registrado', pagoId: pago.id };
  }
}
