import { createRequire } from "module";
const require = createRequire(import.meta.url);
import uniqid from 'uniqid';

const fetch = require('node-fetch');

import { mockData, mockUserData } from '../data/carsSettingsMockData.js'
// /all_cars?park_id=3

import getCarsData from '../utils/getCarsData.js'

const router = require('express').Router();

// Все настройки
router.get('/get_settings', async (req, res) => {
  try {
    res.status(200).json(mockData).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

// Сохранить имя компании
router.post('/save_company_name', async (req, res) => {
  const { company_name } = req.body
  console.log("▶ ⇛ company_name:", company_name);
  try {
    res.status(200).json({ "msg": "имя компании обновлено", "company_name": company_name }).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

// Обновить баланс компании
router.get('/refresh_balance', async (req, res) => {
  const company_id = req.query?.company_id
  const balance = String(Math.floor(Math.random() * 1000))
  try {
    res.status(200).json({ "balance": balance, "msg": "Баланс обновлен" }).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

// Удалить короткую ссылку
router.delete('/delete_short_link', async (req, res) => {
  const { company_id } = req.body
  console.log("Company-id-->", company_id);
  try {
    res.status(200).json({ "msg": "Короткая ссылка удалена" }).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

// Обновить короткую ссылку
router.post('/refresh_short_link', async (req, res) => {
  const { company_id } = req.body
  console.log("▶ ⇛ refresh_short_link company_id:", company_id);
  try {
    res.status(200).json({ "msg": "Короткая ссылка Обновлена", "new_link": "some_new_link" }).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

// Создать короткую ссылку
router.post('/create_short_link', async (req, res) => {
  const { company_id } = req.body
  try {
    res.status(200).json({ "link": "somelink", "msg": "Короткая ссылка Создана" }).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

// ? POINTS ROUTE
// Создать запись о контрольной точке
router.post('/create_point', async (req, res) => {
  const pointData = req.body
  try {

    pointData.point_id = uniqid()
    res.status(200).json({ "msg": "Будет Создана новая запись о точке", "data": pointData }).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

// Удалить запись о контрольной точке
router.delete('/delete_point', async (req, res) => {
  const { point_id } = req.body
  try {
    res.status(200).json({ "msg": "Будет удалена точка", "data": point_id }).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

// Обновить запись о контрольной точке
router.post('/save_point', async (req, res) => {
  const updateData = req.body
  try {
    res.status(200).json({ "msg": "Новые данные для обновления точки", "data": updateData }).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

// ? CAR ROUTE
// Создать запись об автомобиле
router.post('/create_car', async (req, res) => {
  const newCar = req.body
  newCar.car_id = uniqid()
  // Переназначение car_name на name
  newCar.name = newCar.car_name;
  // newCar.pic = 'https://leaflet-server-igorgmail.vercel.app/pics/car1.png';
  delete newCar.car_name;
  try {
    res.status(200).json({ "msg": "Новый Автомобиль создан", "data": newCar }).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

// Обновить запись об автомобиле
router.post('/save_car', async (req, res) => {
  const { car_id, name, pic, imei, alter_imei } = req.body

  // if (name === 'error') {
  //   res.status(401).json({ "msg": "Ошибка при обновлении" }).end()
  // }

  const update_car = { car_id, name, pic, imei, alter_imei };
  update_car.car_name = name
  update_car.name.delete()

  try {
    res.status(200).json({ "msg": "Запись об Автомобиле обновлена", "data": update_car }).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

// Удалить запись о Автомобиле
router.delete('/delete_car', async (req, res) => {
  const { car_id } = req.body
  try {
    res.status(200).json({ "msg": "Будет удален Автомобиль", "data": car_id }).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

// ? EVENTS ROUTE

// Создать запись о событии
router.post('/create_event', async (req, res) => {
  const { car_id, point_id, event, time_response_sec } = req.body
  const event_id = uniqid()

  try {
    res.status(200).json({
      "msg": "Новые событие создано", "data":
        { car_id, point_id, event, time_response_sec, event_id }
    }).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
})

// Обновить запись о событии
router.post('/save_event', async (req, res) => {
  const { car_id, user_id, event, time_response_sec, event_id } = req.body

  try {
    res.status(200).json({
      "msg": "Запись о событии обновлена", "data":
        { car_id, user_id, event, time_response_sec, event_id }
    }).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

// Удалить запись о событии
router.delete('/delete_event', async (req, res) => {
  const { event_id } = req.body
  try {
    res.status(200).json({ "msg": "Будет удалено событие", "data": event_id }).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

// ? USER ROUTE
// Получить пользователей
router.get('/get_users', async (req, res) => {

  try {
    res.status(200).json({ "msg": "Новый пользователь создан", "data": JSON.stringify(mockUserData) }).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

// Создать запись об Пользователе
router.post('/create_user', async (req, res) => {
  const { email, role } = req.body
  const new_user = { email, role, user_id: uniqid() }

  try {
    res.status(200).json({ "msg": "Новый пользователь создан", "data": new_user }).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

// Обновить запись об Пользователе
router.post('/save_user', async (req, res) => {
  const { user_id, user_email, user_role } = req.body

  try {
    res.status(200).json({ "msg": "Запись пользователя обновлена", "data": { user_id, user_email, user_role } }).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

// Удалить запись о Пользателе
router.delete('/delete_user', async (req, res) => {
  const { user_id } = req.body
  try {
    res.status(200).json({ "msg": "Будет удален Ползователь", "data": user_id }).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});
export default router;