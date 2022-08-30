const productsRouter = require('express').Router();
const { getAllProducts } = require('../controllers/controller.products');
const authenticateMiddleware = require('../middleware/middleware.auth');

productsRouter.get('/products', authenticateMiddleware, getAllProducts);
module.exports = productsRouter;
