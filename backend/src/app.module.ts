import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ResiduosModule } from './residuos/residuos.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { PlanesModule } from './planes/planes.module';
import { PesajesModule } from './pesajes/pesajes.module';
import { PagosModule } from './pagos/pagos.module';
import { HistorialModule } from './historial/historial.module';
import { ZonasModule } from './zonas/zonas.module';
import { RentabilidadModule } from './rentabilidad/rentabilidad.module';
import { dataSourceOptions } from './data-source';

@Module({
  imports: [
    
   
    // Aquí va la configuración de TypeORM correctamente
    TypeOrmModule.forRoot({ ...dataSourceOptions, autoLoadEntities: true }),
    
    AuthModule,
    UsersModule, 
    ResiduosModule, 
    NotificacionesModule, 
    PlanesModule, 
    PesajesModule, 
    PagosModule, 
    HistorialModule, 
    ZonasModule, 
    RentabilidadModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

