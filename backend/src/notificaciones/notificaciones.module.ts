import { Module } from '@nestjs/common';
import { NotificacionesService } from './notificaciones.service';

@Module({
  providers: [NotificacionesService],
  exports:   [NotificacionesService],   // ← para que otros módulos lo puedan inyectar
})
export class NotificacionesModule {}
