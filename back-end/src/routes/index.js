const express = require('express');
const loginRouter = require('./loginRouter');
const productsRouter = require('./productsRouter');

const routes = express.Router();

routes.use(loginRouter);
routes.use(productsRouter);

module.exports = routes;
