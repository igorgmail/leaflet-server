/* eslint-disable camelcase */
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const fetch = require('node-fetch');

const url = 'https://gpson.ru/api/gpsapi.php';

const username = 'test';
const password = '123';
const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  // 'Authorization': `Basic ${username}:${password}`
  Authorization: `Basic ${btoa(`${username}:${password}`)}`,
};

const router = require('express').Router();

// ? POINTS ROUTE
// Удалить запись о контрольной точке
router.delete('/delete_point', async (req, res) => {
  const { point_id } = req.query;
  console.log('▶ ⇛ point_id :', point_id);

  try {
    const goToServerCustomer = await fetch(`${url}/delete_point?point_id=${point_id}`, {
      headers,
      // body: { car_id }
    });
    const result = await goToServerCustomer.json();
    console.log('▶ ⇛ result:', result);

    // res.status(200).json({ "status": "error", "message": "An event has been scheduled for the" }).end()
    res.status(200).json(result).end();

    // res.status(200).json({ "msg": "Будет удалена точка", "data": point_id }).end()
  } catch (error) {
    console.log('Error fetch to http://89.108.99.163/', error);
    res.status(501).end();
  }
});

// Создать запись о контрольной точке
// https://gpson.ru/api/gpsapi.php/create_point?point_name=new%20point&address=fdsafdfdasffds&lat=4342&lng=4324&radius=33
router.post('/create_point', async (req, res) => {
  const pointData = req.query;

  try {
    const param = `point_name=${pointData.point_name}&address=${pointData.address}&lat=${pointData.lat}&lng=${pointData.lng}&radius=${pointData.radius}`;
    const goToServerCustomer = await fetch(`${url}/create_point?${param}`, {
      method: 'POST',
      headers,
    });
    const result = await goToServerCustomer.json();
    console.log('▶ ⇛ result:', result);
    res.status(200).json(result).end();
  } catch (error) {
    console.log('Error fetch to http://89.108.99.163/', error);
    res.status(501).end();
  }
});

// Обновить запись о контрольной точке
// https://gpson.ru/api/gpsapi.php/save_point?point_id=1&point_name=new%20name&address=fdsfds&lat=323&lng=123&radius=33
router.post('/save_point', async (req, res) => {
  const updateData = req.query;
  console.log('▶ ⇛ updateData:', updateData);
  const param = `point_id=${updateData.point_id}&point_name=${updateData.point_name}&address=${updateData.address}&lat=${updateData.lat}&lng=${updateData.lng}&radius=${updateData.radius}`;

  try {
    const goToServerCustomer = await fetch(`${url}/save_point?${param}`, {
      method: 'POST',
      headers,
    });

    const result = await goToServerCustomer.json();
    console.log('▶ ⇛ result:', result);
    res.status(200).json(result).end();
  } catch (error) {
    console.log('Error fetch to http://89.108.99.163/', error);
    res.status(501).end();
  }
});

export default router;
