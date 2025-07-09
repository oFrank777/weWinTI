import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '@/users/entities/user.entity';

export enum TipoResiduo { Plastico='plastico', Papel='papel', Vidrio='vidrio', Organico='organico', Metal='metal' }
export enum EstadoReporte { PENDIENTE_PAGO='pendiente_pago', PAGADO='pagado', ASIGNADO='asignado', RECOGIDO='recogido', PESADO='pesado', COMPLETADO='completado' }

@Entity()
export class ReporteResiduo {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'enum', enum: TipoResiduo })  tipo: TipoResiduo;
  @Column()                                       fotoUrl: string;
  @Column({ type: 'float', nullable: true })      kilos?: number;
  @Column({ type: 'enum', enum: EstadoReporte, default: EstadoReporte.PENDIENTE_PAGO }) estado: EstadoReporte;

  @ManyToOne(() => User, (u) => u.id, { eager: true })  cliente: User;
  @CreateDateColumn()                                   createdAt: Date;
}
