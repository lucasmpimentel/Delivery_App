const express = require('express');
const checkoutRouter = require('./checkoutRouter');
const loginRouter = require('./loginRouter');
const productsRouter = require('./productsRouter');

const routes = express.Router();

routes.use(loginRouter);
routes.use(productsRouter);
routes.use(checkoutRouter);

module.exports = routes;
