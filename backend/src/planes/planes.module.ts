import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plan } from './entities/plan.entity';
import { PlanesService } from './planes.service';
import { PlanesController } from './planes.controller';
import { UsersModule } from '@/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Plan]), UsersModule],
  providers: [PlanesService],
  controllers: [PlanesController],
})
export class PlanesModule {}
