import { IsNumber, IsPositive, IsString } from 'class-validator';
export class CrearPagoDto {
  @IsNumber()   @IsPositive() monto: number;
  @IsString()                 metodo: string;
  @IsNumber()                 reporteId: number;
}
