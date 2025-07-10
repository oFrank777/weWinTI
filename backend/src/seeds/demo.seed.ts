// src/seeds/mega.seed.ts
import { DataSource, DeepPartial } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User, Role } from '@/users/entities/user.entity';
import { Plan, PeriodicidadPlan } from '@/planes/entities/plan.entity';
import {
  ReporteResiduo,
  EstadoReporte,
  TipoResiduo,
} from '@/residuos/entities/reporte-residuo.entity';
import { Pago } from '@/pagos/entities/pago.entity';

/* ─ helpers ─ */
const hashSync = (pwd: string) => bcrypt.hashSync(pwd, 10);
const rnd = <T>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
const rndNum = (min: number, max: number) =>
  Math.round((Math.random() * (max - min) + min) * 10) / 10;

export default async function run(ds: DataSource) {
  /* 1. Planes */
  const planRepo = ds.getRepository(Plan);
  const planes = await planRepo.save([
    planRepo.create({ nombre: 'Hogar Semanal',   frecuencia: PeriodicidadPlan.Semanal,   precioBase: 15 }),
    planRepo.create({ nombre: 'Hogar Mensual',   frecuencia: PeriodicidadPlan.Mensual,   precioBase: 50 }),
    planRepo.create({ nombre: 'Hogar Semestral', frecuencia: PeriodicidadPlan.Semestral, precioBase: 250 }),
    planRepo.create({ nombre: 'Empresa Semanal', frecuencia: PeriodicidadPlan.Semanal,   precioBase: 60 }),
    planRepo.create({ nombre: 'Empresa Mensual', frecuencia: PeriodicidadPlan.Mensual,   precioBase: 220 }),
    planRepo.create({ nombre: 'Empresa Semestral', frecuencia: PeriodicidadPlan.Semestral, precioBase: 1200 }),
  ]);

  /* 2. Usuarios */
  const userRepo = ds.getRepository(User);

  // 15 clientes
  const clientes: DeepPartial<User>[] = [];
  for (let i = 1; i <= 15; i++) {
    clientes.push({
      dni: `${10000000 + i}`,
      email: `cliente${i}@mail.com`,
      password: hashSync('Passw0rd!'),
      telefono: `+51987${i.toString().padStart(7, '0')}`,
      nombre: `Cliente ${i}`,
      direccion: `Calle ${i} #${i * 10}`,
      role: Role.Cliente,
      planes: [rnd(planes)],
    });
  }

  // 3 choferes
  const transportes: DeepPartial<User>[] = [1, 2, 3].map((i) => ({
    dni: `${20000000 + i}`,
    email: `driver${i}@mail.com`,
    password: hashSync('Passw0rd!'),
    telefono: `+51976${i.toString().padStart(7, '0')}`,
    nombre: `Chofer ${i}`,
    direccion: 'Base de transporte',
    role: Role.Transporte,
  }));

  // 2 admins
  const admins: DeepPartial<User>[] = [
    {
      dni: '30000001',
      email: 'admin@mail.com',
      password: hashSync('Admin123!'),
      telefono: '+51911111111',
      nombre: 'Super Admin',
      direccion: 'Oficina Central',
      role: Role.Admin,
    },
    {
      dni: '30000002',
      email: 'admin2@mail.com',
      password: hashSync('Admin123!'),
      telefono: '+51922222222',
      nombre: 'Admin Secundario',
      direccion: 'Oficina Central',
      role: Role.Admin,
    },
  ];

  const allUsers = await userRepo.save([
    ...clientes,
    ...transportes,
    ...admins,
  ]);

  /* 3. Reportes (60) */
  const repRepo = ds.getRepository(ReporteResiduo);
  const estados = Object.values(EstadoReporte);
  const tipos = Object.values(TipoResiduo);

  const reportesData: DeepPartial<ReporteResiduo>[] = Array.from({ length: 60 }).map(
    (_, i) => {
      const estado = rnd(estados);
      return {
        tipo: rnd(tipos),
        fotoUrl: `https://picsum.photos/seed/${i}/400/300`,
        estado,
        kilos:
          estado === EstadoReporte.PESADO ||
          estado === EstadoReporte.COMPLETADO
            ? rndNum(2, 15)
            : undefined,
        cliente: rnd(clientes) as User,
      };
    },
  );

  const reportes = await repRepo.save(reportesData as DeepPartial<ReporteResiduo>[]);

  /* 4. Pagos (40) */
  const pagoRepo = ds.getRepository(Pago);
  const pagables = reportes.filter((r) =>
    [EstadoReporte.PAGADO, EstadoReporte.PESADO, EstadoReporte.COMPLETADO].includes(
      r.estado,
    ),
  );

  const pagosData: DeepPartial<Pago>[] = pagables.slice(0, 40).map((rep) => ({
    monto: rndNum(15, 120),
    metodo: rnd(['yape', 'stripe', 'efectivo', 'paypal']),
    cliente: rep.cliente,
    reporte: rep,
  }));

  await pagoRepo.save(pagosData);

  console.log(
    '🌱 Mega seed listo: 6 planes, 20 usuarios, 60 reportes, 40 pagos',
  );
}