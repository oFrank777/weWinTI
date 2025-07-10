import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { Plan } from '@/planes/entities/plan.entity'; // asegúrate que esta ruta sea correcta

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Plan]) // ← AQUI ESTÁ LA CLAVE
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
