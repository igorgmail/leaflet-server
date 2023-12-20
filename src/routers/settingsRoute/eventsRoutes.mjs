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

// ? EVENTS ROUTE
// Удалить запись о событии
router.delete('/delete_event', async (req, res) => {
  const { event_id } = req.query;

  try {
    const goToServerCustomer = await fetch(`${url}/delete_event?event_id=${event_id}`, {
      headers,
      // body: { car_id }
    });
    const result = await goToServerCustomer.json();
    console.log('▶ ⇛ result:', result);

    res.status(200).json(result).end();
    // res.status(200).json({ "msg": "Будет удалено событие", "data": event_id }).end()
  } catch (error) {
    console.log('Error fetch to http://89.108.99.163/', error);
    res.status(501).end();
  }
});

// Создать запись о событии
router.post('/create_event', async (req, res) => {
  const eventData = req.query;
  console.log('▶ ⇛ eventData:', eventData);
  const param = `car_id=${eventData.car_id}&point_id=${eventData.point_id}&event=${eventData.event}&time_response_sec=${eventData.time_response_sec}`;

  try {
    const goToServerCustomer = await fetch(`${url}/create_event?${param}`, {
      method: 'POST',
      headers,
    });
    const result = await goToServerCustomer.json();
    console.log('▶ ⇛ result:', result);

    // res.status(200).json({ "status": "error", "message": "The point is not exists." }).end()
    res.status(200).json(result).end();
  } catch (error) {
    console.log('Error fetch to http://89.108.99.163/', error);
    res.status(501).end();
  }
});

// Обновить запись о событии
router.post('/save_event', async (req, res) => {
  const eventData = req.query;
  console.log('▶ ⇛ eventData:', eventData);

  const param = `event_id=${eventData.event_id}&car_id=${eventData.car_id}&point_id=${eventData.point_id}&event=${eventData.event}&time_response_sec=${eventData.time_response_sec}`;

  try {
    const goToServerCustomer = await fetch(`${url}/save_event?${param}`, {
      method: 'POST',
      headers,
    });
    const result = await goToServerCustomer.json();
    console.log('▶ ⇛ result:', result);

    // res.status(200).json({ "status": "error", "message": "The point is not exists." }).end()
    res.status(200).json(result).end();
  } catch (error) {
    console.log('Error fetch to http://89.108.99.163/', error);
    res.status(501).end();
  }
});

export default router;
