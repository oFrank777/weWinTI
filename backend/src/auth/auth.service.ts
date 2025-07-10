import { Injectable,BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '@/users/users.service';
import { CreateUserDto } from '@/users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { User } from '@/users/entities/user.entity'; // o ajusta la ruta si usas relativas
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;          // sin password
    }
    return null;
  }

  async login(dto: LoginDto) {
  const user = await this.validateUser(dto.email, dto.password);
  if (!user) throw new Error('Credenciales inválidas');

  const payload = { sub: user.id, email: user.email, role: user.role };
  return { access_token: this.jwtService.sign(payload) };
}


  async register(dto: CreateUserDto): Promise<User> {
    const exists = await this.repo.findOne({ where: { email: dto.email } });
    if (exists) throw new BadRequestException('El correo ya está registrado');

    const passwordHash = await bcrypt.hash(dto.password, 10);
    const user = this.repo.create({ ...dto, password: passwordHash });

    return this.repo.save(user);
  }
}
