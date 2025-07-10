import { Controller, Get, Post, Param, UseGuards, Req } from '@nestjs/common';
import { PlanesService } from './planes.service';
import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import { RolesGuard } from '@/auth/guards/roles.guard';
import { Roles } from '@/auth/decorators/roles.decorator';
import { Role } from '@/users/entities/user.entity';

@Controller('cliente/planes')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.Cliente)
export class PlanesController {
  constructor(private planesService: PlanesService) {}

  @Get()
  listar() { return this.planesService.findAllActivos(); }

}