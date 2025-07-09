import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { HistorialService } from './historial.service';
import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import { RolesGuard } from '@/auth/guards/roles.guard';
import { Roles } from '@/auth/decorators/roles.decorator';
import { Role } from '@/users/entities/user.entity';

@Controller('cliente/historial')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.Cliente)
export class HistorialController {
  constructor(private historialService: HistorialService) {}

  @Get()
  findMiHistorial(@Req() req) {
    return this.historialService.getHistorialCliente(req.user.id);
  }
}
