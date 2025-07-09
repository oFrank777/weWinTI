import { IsEnum, IsUrl } from 'class-validator';
import { TipoResiduo } from '../entities/reporte-residuo.entity';

export class ReportarResiduoDto {
  @IsEnum(TipoResiduo) tipo: TipoResiduo;
  @IsUrl()             fotoUrl: string;   // URL firmada a S3 / Cloudinary
}