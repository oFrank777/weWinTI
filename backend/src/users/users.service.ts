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

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {}

  /** Busca por id e incluye relaciones opcionales. Devuelve `null` si no existe. */
  async findOne(
    id: number,
    relations: string[] = [],
  ): Promise<User | null> {
    return this.repo.findOne({ where: { id }, relations });
  }

  /** Igual a `findOne`, pero lanza 404 si no encuentra. */
  async findOneOrFail(
    id: number,
    relations: string[] = [],
  ): Promise<User> {
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

  /** Registro exclusivo para el rol **Cliente** */
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
}