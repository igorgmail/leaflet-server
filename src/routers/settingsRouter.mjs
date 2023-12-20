import { createRequire } from "module";
const require = createRequire(import.meta.url);
import uniqid from 'uniqid';

import { companyRoutes, carsRoutes, pointsRoutes, eventsRoutes, usersRoutes } from './settingsRoute/index.mjs'

const fetch = require('node-fetch');
const url = 'https://gpson.ru/api/gpsapi.php'

const username = 'test';
const password = '123';
const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  // 'Authorization': `Basic ${username}:${password}`
  'Authorization': 'Basic ' + btoa(username + ":" + password)
}
// import { mockData, mockUserData } from '../data/carsSettingsMockData.mjs'
// /all_cars?park_id=3

// import getCarsData from '../utils/getCarsData.js'

const router = require('express').Router();

// Все настройки
router.get('/get_settings', companyRoutes);
router.get('/save_company_name', companyRoutes);
router.get('/refresh_balance', companyRoutes);
router.delete('/delete_short_link', companyRoutes);
router.post('/refresh_short_link', companyRoutes);
router.post('/create_short_link', companyRoutes);

// CARS
router.get('/create_car', carsRoutes)
router.post('/save_car', carsRoutes)
router.delete('/delete_car', carsRoutes)

// POINTS
router.delete('/delete_point', pointsRoutes)
router.post('/create_point', pointsRoutes)
router.post('/save_point', pointsRoutes)

// EVENTS
router.post('/create_event', eventsRoutes)
router.post('/save_event', eventsRoutes)
router.delete('/delete_event', eventsRoutes)

// USER
router.get('/get_users', usersRoutes)
router.post('/create_user', usersRoutes)
router.post('/save_user', usersRoutes)
router.delete('/delete_user', usersRoutes)


export default router;