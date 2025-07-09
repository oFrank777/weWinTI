import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS para permitir conexión desde Vite
  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true,
  });

  // Validación global
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, transform: true }),
  );

  // Swagger para documentación
  const config = new DocumentBuilder()
    .setTitle('WeWin API')
    .setDescription('Documentación de todos los módulos (auth, users, residuos, pagos, etc.)')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log(`🚀  API lista en: http://localhost:3000/api`);
}
bootstrap();
