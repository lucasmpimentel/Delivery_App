const salesRouter = require('express').Router();

const { getAllSales, getSale, getSalesAndProducts } = require('../controllers/controller.sales');

salesRouter.get('/details', getSalesAndProducts);
salesRouter.get('/', getAllSales);
salesRouter.get('/:id', getSale);

module.exports = salesRouter;
