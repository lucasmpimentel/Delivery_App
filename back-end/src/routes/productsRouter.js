const productsRouter = require('express').Router();
const { getAllProducts } = require('../controllers/controller.products');

productsRouter.get('/products', getAllProducts);
module.exports = productsRouter;
