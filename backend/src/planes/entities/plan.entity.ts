import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { User } from '@/users/entities/user.entity';
export enum PeriodicidadPlan {
  SEMANAL = 'semanal',
  MENSUAL = 'mensual',
  SEMESTRAL = 'semestral',
}
@Entity()
export class Plan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  frecuencia: string; // semanal, mensual, etc.

  @Column('decimal', { precision: 10, scale: 2 })
  precioBase: number;

  @Column({ default: true })
  activo: boolean;

  @OneToMany(() => User, (user) => user.plan)
clientes: User[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
