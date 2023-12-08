import { createRequire } from "module";
const require = createRequire(import.meta.url);

const fetch = require('node-fetch');

// /all_cars?park_id=3

import getCarsData from '../utils/getCarsData.js'

const router = require('express').Router();

router.get('/', async (req, res) => {

  const park_id = req.query?.park_id || 1
  try {
    const goToServerCustomer = await fetch(`http://89.108.99.163/gps/gpsapi.php/all_cars?park_id=${park_id}`)
  const result = await goToServerCustomer.json()
    res.status(200).json(result).end()

  } catch (error) {
    res.status(500).end()

  }


  // result.cars.map(el => el.pic = `https://89.108.99.163/pics/car2.png`)
  // console.log("▶ ⇛ result:", result);


});

export default router;