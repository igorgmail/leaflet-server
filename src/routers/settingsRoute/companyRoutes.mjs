import { createRequire } from "module";
const require = createRequire(import.meta.url);

const router = require('express').Router();

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

// Все настройки
router.get('/get_settings', async (req, res) => {
  try {
    const goToServerCustomer = await fetch(url + `/get_settings`, { headers })
    const result = await goToServerCustomer.json()
    res.status(200).json(result).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

// Сохранить имя компании
router.get('/save_company_name', async (req, res) => {
  // const park_id = req.query
  const { company_name } = req.query
  console.log("▶ ⇛ company_name:", company_name);

  try {
    const goToServerCustomer = await fetch(url + `/save_company_name?company_name=${company_name}`, {
      headers,
    })
    const result = await goToServerCustomer.json()
    res.status(200).json(result).end()
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
    const goToServerCustomer = await fetch(url + `/refresh_balance`, {
      headers,
    })
    const result = await goToServerCustomer.json()

    res.status(200).json(result).end()
    // res.status(200).json({ "status": "error", "message": "Not Updated" }).end()

  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

// Удалить короткую ссылку
router.delete('/delete_short_link', async (req, res) => {
  const { company_id } = req.body



  try {
    const goToServerCustomer = await fetch(url + `/delete_short_link`, {
      headers,
    })
    const result = await goToServerCustomer.json()

    res.status(200).json(result).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

// Обновить короткую ссылку
router.post('/refresh_short_link', async (req, res) => {
  const { company_id } = req.body

  try {
    const goToServerCustomer = await fetch(url + `/refresh_short_link`, {
      headers,
    })
    const result = await goToServerCustomer.json()

    res.status(200).json(result).end()
    // res.status(200).json({ "msg": "Короткая ссылка Обновлена", "new_link": "some_new_link" }).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

// Создать короткую ссылку
router.post('/create_short_link', async (req, res) => {
  const { company_id } = req.body
  try {
    const goToServerCustomer = await fetch(url + `/create_short_link`, {
      headers,
    })
    const result = await goToServerCustomer.json()


    res.status(200).json(result).end()

    // res.status(200).json({ "link": "somelink", "msg": "Короткая ссылка Создана" }).end()
  } catch (error) {
    console.log("Error fetch to http://89.108.99.163/", error);
    res.status(501).end()
  }
});

export default router;