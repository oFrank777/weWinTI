import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReporteResiduo } from './entities/reporte-residuo.entity';
import { ResiduosService } from './residuos.service';
import { ClienteResiduosController } from './controllers/cliente-residuos.controller';
import { UsersModule } from '@/users/users.module';
import { NotificacionesModule } from '@/notificaciones/notificaciones.module';

@Module({
  imports: [TypeOrmModule.forFeature([ReporteResiduo]), UsersModule, NotificacionesModule],
  providers: [ResiduosService],
  controllers: [ClienteResiduosController],
  exports: [ResiduosService],
})
export class ResiduosModule {}