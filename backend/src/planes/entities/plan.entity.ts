import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { User } from '@/users/entities/user.entity';

export enum PeriodicidadPlan { Semanal='semanal', Mensual='mensual', Semestral='semestral' }

@Entity()
export class Plan {
  @PrimaryGeneratedColumn() id: number;
  @Column() nombre: string;
  @Column({ type: 'enum', enum: PeriodicidadPlan }) frecuencia: PeriodicidadPlan;
  @Column({ type: 'decimal', precision: 10, scale: 2 }) precioBase: number;
  @Column({ default: true }) activo: boolean;

  /* ← inversa correcta */
  @ManyToMany(() => User, (u: User) => u.planes)
  clientes: User[];
}
