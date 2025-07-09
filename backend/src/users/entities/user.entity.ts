import {
  Entity, PrimaryGeneratedColumn, Column,
  CreateDateColumn, UpdateDateColumn,
  ManyToMany, OneToMany, JoinTable          //  <── añade JoinTable
} from 'typeorm';
import { Plan } from '@/planes/entities/plan.entity';
import { ReporteResiduo } from '@/residuos/entities/reporte-residuo.entity';

export enum Role { Cliente='cliente', Transporte='transporte', Admin='admin' }

@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number;

  @Column({ unique: true }) dni: string;
  @Column({ unique: true }) email: string;
  @Column()                password: string;
  @Column()                telefono: string;
  @Column()                nombre: string;
  @Column()                direccion: string;

  @Column({ type: 'enum', enum: Role, default: Role.Cliente })
  role: Role;

  /* ← NUEVO: relación con planes */
  @ManyToMany(() => Plan, (plan) => plan.clientes, { cascade: true })
  @JoinTable()
  planes: Plan[];

  /* inversa para reportes (si no la tenías) */
  @OneToMany(() => ReporteResiduo, (rep) => rep.cliente)
  reportes: ReporteResiduo[];

  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
}
