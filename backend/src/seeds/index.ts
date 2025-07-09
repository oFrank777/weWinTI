import { AppDataSource } from '../data-source';
import megaSeed from './demo.seed';        // asegúrate del nombre exacto

(async () => {
  await AppDataSource.initialize();
  await megaSeed(AppDataSource);          // ejecuta el seeder
  await AppDataSource.destroy();
})();
