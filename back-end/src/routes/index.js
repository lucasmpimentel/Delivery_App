const express = require('express');
const checkoutRouter = require('./checkoutRouter');
const loginRouter = require('./loginRouter');
const productsRouter = require('./productsRouter');
const salesRouter = require('./salesRouter');
const sellerRouter = require('./sellerRouter');
const authenticateMiddleware = require('../middleware/middleware.auth');

const routes = express.Router();

routes.use(loginRouter);
routes.use(authenticateMiddleware, productsRouter);
routes.use(authenticateMiddleware, checkoutRouter);
routes.use('/sales', authenticateMiddleware, salesRouter);
routes.use(authenticateMiddleware, sellerRouter)

module.exports = routes;
