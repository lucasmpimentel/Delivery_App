const salesRouter = require('express').Router();

const {
  getAllSales,
  getSale,
  getSalesAndProducts,
  getSaleByUserId,
  getSaleDetailsByUserId,
} = require('../controllers/controller.sales');

salesRouter.get('/details', getSalesAndProducts);
salesRouter.get('/details/:id', getSaleDetailsByUserId);
salesRouter.get('/', getAllSales);
salesRouter.get('/:id', getSale);
salesRouter.get('/user/:id', getSaleByUserId);

module.exports = salesRouter;
