import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Pago } from './entities/pago.entity';
import { PagosService } from './pagos.service';
import { ClientePagosController } from './pagos.controller';

import { UsersModule } from '@/users/users.module';
import { ResiduosModule } from '@/residuos/residuos.module';
import { NotificacionesModule } from '@/notificaciones/notificaciones.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pago]),
    UsersModule,
    ResiduosModule,
    NotificacionesModule,
  ],
  providers:   [PagosService],
  controllers: [ClientePagosController],
})
export class PagosModule {}
