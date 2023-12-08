import { createRequire } from "module";
const require = createRequire(import.meta.url);

const fetch = require('node-fetch');

// /all_cars?park_id=3

import getCarsData from '../utils/getCarsData.js'

const router = require('express').Router();

router.get('/', async (req, res) => {
  // http://89.108.99.163/gps/gpsapi.php/history?park_id=1&car_id=1&from=2023-10-20%2000:00&to=2023-10-20%2023:25
  const url = 'http://89.108.99.163/gps/gpsapi.php/history'
  const park_id = 1
  const param = req.query;
  console.log("▶ ⇛ param:", param);
  const { car_id, from, to } = { ...param }
  console.log("▶ ⇛ to:", to);
  console.log("▶ ⇛ from:", from);
  console.log("▶ ⇛ car_id:", car_id);
  try {
    const urlString = `http://89.108.99.163/gps/gpsapi.php/history?park_id=${park_id}&car_id=${car_id}&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`
    console.log("▶ ⇛ urlString:", urlString);
    const goToServerCustomer = await fetch(urlString)
    const result = await goToServerCustomer.json()
    // console.log("▶ ⇛ result:", result);

    // result.cars.map(el => el.pic = `https://89.108.99.163/pics/car2.png`)
    // console.log("▶ ⇛ result:", result);

    res.status(200).json(result).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }

  // res.json('Ok').end()
});

export default router;