import {
  Controller,
  Get,
  Put,
  Param,
  Body,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import { RolesGuard } from '@/auth/guards/roles.guard';
import { Roles } from '@/auth/decorators/roles.decorator';
import { Role } from './entities/user.entity';

@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.Admin)
export class AdminController {
  constructor(private readonly usersService: UsersService) {}

  // GET /admin/clientes
  @Get('clientes')
  findAllClientes() {
    return this.usersService.findClientes();
  }

  // PUT /admin/clientes/:id/planes
  @Put('clientes/:id/planes')
  assignPlanes(
    @Param('id', ParseIntPipe) userId: number,
    @Body('planId') planId: number,
  ) {
    return this.usersService.assignPlan(userId, planId);
  }

  // GET /admin/clientes/:id/reportes
  @Get('clientes/:id/reportes')
  getReportes(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getReportesDeCliente(id);
  }
}
