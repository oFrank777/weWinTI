import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User, Role } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Plan } from '@/planes/entities/plan.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
    @InjectRepository(Plan) private readonly planRepo: Repository<Plan>,
  ) {}

  async findAll(role?: Role): Promise<User[]> {
    if (role) {
      return this.repo.find({
        where: { role },
        relations: ['plan', 'reportes'],
      });
    }
    return this.repo.find({ relations: ['plan', 'reportes'] });
  }

  async findOne(id: number, relations: string[] = []): Promise<User | null> {
    return this.repo.findOne({ where: { id }, relations });
  }

  async findOneOrFail(id: number, relations: string[] = []): Promise<User> {
    const user = await this.findOne(id, relations);
    if (!user) throw new NotFoundException('Usuario no encontrado');
    return user;
  }

  findByEmail(email: string) {
    return this.repo.findOne({ where: { email } });
  }

  save(user: User) {
    return this.repo.save(user);
  }

  // Registro para clientes
  async registerCliente(dto: CreateUserDto) {
    const exists = await this.repo.findOne({
      where: [{ email: dto.email }, { dni: dto.dni }],
    });
    if (exists) throw new BadRequestException('Usuario ya registrado');

    const hash = await bcrypt.hash(dto.password, 10);
    const user = this.repo.create({
      ...dto,
      password: hash,
      role: Role.Cliente,
    });
    return this.repo.save(user);
  }

  async findClientes() {
    return this.repo.find({
      where: { role: Role.Cliente },
      relations: ['planes', 'reportes'],
    });
  }

  async findEmpleados() {
    return this.repo.find({
      where: { role: Role.Admin },
      relations: ['planes', 'reportes'],
    });
  }

  async create(dto: CreateUserDto): Promise<User> {
    const exists = await this.repo.findOne({
      where: [{ email: dto.email }, { dni: dto.dni }],
    });
    if (exists) throw new BadRequestException('Usuario ya existe');

    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const user = this.repo.create({ ...dto, password: hashedPassword });
    return this.repo.save(user);
  }

  async update(id: number, dto: UpdateUserDto): Promise<User> {
    const user = await this.findOneOrFail(id);
    const updated = Object.assign(user, dto);
    if (dto.password) {
      updated.password = await bcrypt.hash(dto.password, 10);
    }
    return this.repo.save(updated);
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOneOrFail(id);
    await this.repo.remove(user);
  }

  async assignPlan(userId: number, planId: number) {
  const user = await this.repo.findOne({
    where: { id: userId },
    relations: ['plan'], // si necesitas que venga con el plan actual
  });

  if (!user) {
    throw new NotFoundException('Usuario no encontrado');
  }

  const plan = await this.planRepo.findOneByOrFail({ id: planId });

  user.plan = plan;

  return this.repo.save(user);
}


  async getReportesDeCliente(userId: number) {
    const user = await this.repo.findOne({
      where: { id: userId },
      relations: ['reportes'],
    });
    return user?.reportes ?? [];
  }
}
