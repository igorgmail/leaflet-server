import { createRequire } from "module";
const require = createRequire(import.meta.url);
const path = require('path');

// const carsRoter = require('./carsRouter')
import carsRouter from './src/routers/carsRouter.js'
import historyRouter from './src/routers/historyRouter.js'
import settingsRouter from './src/routers/settingsRouter.mjs'

const cors = require('cors')
const logger = require('morgan')
const express = require('express');

const requestIp = require('request-ip');

const bodyParser = require('body-parser');
const app = express();
app.use(cors())


app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.use(requestIp.mw());

// app.get('/head', (req, res) => {
//   // Получение данных о пользователе
//   const { headers, query, params, body, cookie } = req;
//   const ip = req.clientIp; // IP-адрес клиента
//   const port = req.connection.remotePort
//   const ips = req.ips

//   console.log(`Request from ip: ${ip}`);
//   // Отправка данных о пользователе в ответ
//   res.json({ headers, query, params, body, ip, cookie, port, ips });
// });

app.use('/cars', carsRouter)
app.use('/history', historyRouter)
app.use('/apisetting', settingsRouter)

// Запуск сервера на порту 3000
app.listen(3005, () => {
  console.log('Сервер запущен на порту 3005');
});
