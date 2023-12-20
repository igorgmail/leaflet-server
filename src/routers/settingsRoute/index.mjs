import { createRequire } from "module";
const require = createRequire(import.meta.url);

import carsRoutes from './carsRoutes.mjs';
import companyRoutes from './companyRoutes.mjs';
import pointsRoutes from './pointRoutes.mjs';
import eventsRoutes from './eventsRoutes.mjs';
import usersRoutes from './usersRoutes.mjs'
// import refreshBalanceRouter from './refreshBalanceRouter';
// Добавьте другие импорты для остальных роутеров

export {
  companyRoutes,
  carsRoutes,
  pointsRoutes,
  eventsRoutes,
  usersRoutes,
};