const express = require('express');
const cors = require('cors');
require('express-async-errors');
const middleware = require('../middleware/middleware.error');

const router = require('../routes/index');

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);
app.use(express.static('public'));
app.use(middleware.midError);

module.exports = app;
