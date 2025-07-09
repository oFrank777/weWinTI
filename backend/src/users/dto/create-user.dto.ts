import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  IsPhoneNumber,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  dni: string;

  @IsEmail()
  email: string;

  /** contraseña en texto plano; se hashea en el servicio */
  @IsString()
  @Length(6, 32)
  password: string;

  @IsPhoneNumber('PE')   // cambia el país si hace falta
  telefono: string;

  @IsString()
  nombre: string;

  @IsString()
  direccion: string;
}