import { createRequire } from "module";
const require = createRequire(import.meta.url);


const fetch = require('node-fetch');

import { mockData } from '../data/carsSettingsMockData.js'
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
  console.log("Refresh Balance Company-id-->", company_id);
  try {
    res.status(200).json({ "balance": "1050", "msg": "Баланс обновлен" }).end()
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

// Создать запись о контрольной точке
router.post('/create_point', async (req, res) => {
  const pointData = req.body
  try {
    res.status(200).json({ "msg": "Будет Создана новая запись о точке", "pointData": pointData }).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

// Удалить запись о контрольной точке
router.delete('/delete_point', async (req, res) => {
  const { point_id } = req.body
  try {
    res.status(200).json(JSON.stringify({ "msg": "Будет удалена точка", "point_id": point_id })).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

// Обновить запись о контрольной точке
router.post('/save_point', async (req, res) => {
  const { updateData } = req.body
  try {
    res.status(200).json(JSON.stringify({ "msg": "Новые данные для обновления точки", "point_id": updateData })).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});



export default router;