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

// ? USER ROUTE
// /create_user?user_email=test%40mail.com&user_role=user'
// Создать запись об Пользователе
router.post('/create_user', async (req, res) => {
  const userData = req.query;
  console.log('▶ ⇛ eventData:', userData);

  const param = `user_email=${userData.user_email}&user_role=${userData.user_role}`;

  try {
    const goToServerCustomer = await fetch(`${url}/create_user?${param}`, {
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

// Удалить запись о Пользателе
router.delete('/delete_user', async (req, res) => {
  const { user_id } = req.query;
  console.log('▶ ⇛ user_id:', user_id);
  const param = `user_id=${user_id}`;

  try {
    const goToServerCustomer = await fetch(`${url}/delete_user?${param}`, {
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

// ?user_id=44&user_email=new%40gmail654654654.com&user_role=user'
// Обновить запись об Пользователе
router.post('/save_user', async (req, res) => {
  const userData = req.query;
  console.log('▶ ⇛ userData:', userData);

  const param = `user_id=${userData.user_id}&user_email=${userData.user_email}&user_role=${userData.user_role}`;

  try {
    const goToServerCustomer = await fetch(`${url}/save_user?${param}`, {
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

// Получить пользователей
router.get('/get_users', async (req, res) => {
  try {
    res.status(200).json({ msg: 'Новый пользователь создан', data: JSON.stringify('mockUserData') }).end();
  } catch (error) {
    console.log('Error fetch to http://89.108.99.163/', error);
    res.status(501).end();
  }
});

export default router;
