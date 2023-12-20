import { createRequire } from "module";
const require = createRequire(import.meta.url);

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

const router = require('express').Router();


// ? CAR ROUTE
// Создать запись об автомобиле
router.get('/create_car', async (req, res) => {
  const data = req.query
  console.log("▶ ⇛ newCar:", data);
  // newCar.car_id = uniqid()
  // Переназначение car_name на name
  // newCar.name = newCar.car_name;
  // newCar.pic = 'https://leaflet-server-igorgmail.vercel.app/pics/car1.png';
  // delete newCar.car_name;
  const param = `car_name=${data.car_name}&icon=${data.icon}&imei=${data.imei}&alter_imei=${data.alter_imei}`
  try {
    const goToServerCustomer = await fetch(url + `/create_car?${param}`, {
      method: "GET",
      headers,
    })
    const result = await goToServerCustomer.json()
    console.log("▶ ⇛ result:", result);


    res.status(200).json(result).end()
    // res.status(200).json({ "msg": "Новый Автомобиль создан", "data": newCar }).end()

  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

// Обновить запись об автомобиле
router.post('/save_car', async (req, res) => {
  const carData = req.query
  console.log("▶ ⇛ carData:", carData);

  if (carData.car_name === 'error') {
    res.status(401).json({ "msg": "Ошибка при обновлении" }).end()
  }

  const param = `car_id=${carData.car_id}&car_name=${carData.car_name}&icon=${carData.icon}&imei=${carData.imei}&alter_imei=${carData.alter_imei}`
  try {
    const goToServerCustomer = await fetch(url + `/save_car?${param}`, {
      method: "POST",
      headers,
    })
    const result = await goToServerCustomer.json()
    console.log("▶ ⇛ result:", result);
    res.status(200).json(result).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

// Удалить запись о Автомобиле
router.delete('/delete_car', async (req, res) => {
  const { car_id } = req.query

  try {
    const goToServerCustomer = await fetch(url + `/delete_car?car_id=${car_id}`, {
      headers,
      // body: { car_id }
    })
    const result = await goToServerCustomer.json()
    console.log("▶ ⇛ result:", result);

    res.status(200).json(result).end()
    // res.status(200).json({ "msg": "Будет удален Автомобиль", "data": car_id }).end()

  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});



export default router;