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


}