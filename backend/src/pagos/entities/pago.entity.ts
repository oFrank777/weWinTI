import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { User } from '@/users/entities/user.entity';
import { ReporteResiduo } from '@/residuos/entities/reporte-residuo.entity';

@Entity()
export class Pago {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  monto: number;

  @Column()               // 'stripe' | 'yape' | 'efectivo'…
  metodo: string;

  @ManyToOne(() => User, (u) => u.id)
  cliente: User;

  @OneToOne(() => ReporteResiduo, { eager: true })
  @JoinColumn()
  reporte: ReporteResiduo;

  @CreateDateColumn()
  createdAt: Date;
}
