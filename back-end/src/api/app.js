const express = require('express');
require('express-async-errors');
const middleware = require('../middleware/middleware.error');

const app = express();

app.use(express.json());

app.use(require('../router'));

app.use(middleware.midError); 

module.exports = app;
