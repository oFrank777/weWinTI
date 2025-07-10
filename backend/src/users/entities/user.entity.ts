import {
  Entity, PrimaryGeneratedColumn, Column,
  CreateDateColumn, UpdateDateColumn,
  ManyToOne, OneToMany, JoinColumn          //  <── añade JoinTable
} from 'typeorm';
import { ReporteResiduo } from '@/residuos/entities/reporte-residuo.entity';
import { Plan } from '@/planes/entities/plan.entity';
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

  /* inversa para reportes (si no la tenías) */
  @OneToMany(() => ReporteResiduo, (rep) => rep.cliente)
  reportes: ReporteResiduo[];
  
  @ManyToOne(() => Plan, (plan) => plan.clientes, { eager: true, nullable: true })
@JoinColumn({ name: 'planId' }) // 👈 esto es importante
plan: Plan;


  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
}
