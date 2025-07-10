// update-user.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Role } from '../entities/user.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {readonly name?: string;
  readonly email?: string;
  readonly password?: string;
  readonly dni?: string;
  readonly role?: Role;
}
