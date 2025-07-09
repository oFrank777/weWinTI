import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plan } from './entities/plan.entity';
import { UsersService } from '@/users/users.service';

@Injectable()
export class PlanesService {
  constructor(
    @InjectRepository(Plan) private repo: Repository<Plan>,
    private usersService: UsersService,
  ) {}

  findAllActivos() { return this.repo.find({ where: { activo: true } }); }

  // src/planes/planes.service.ts
async asignarPlanACliente(userId: number, planId: number) {
  const user = await this.usersService.findOneOrFail(userId, ['planes']); // ya no es null
  const plan = await this.repo.findOne({ where: { id: planId, activo: true } });
  if (!plan) throw new BadRequestException('Plan no disponible');

  user.planes = [...(user.planes ?? []), plan];
  await this.usersService.save(user);
  return plan;
}
}
