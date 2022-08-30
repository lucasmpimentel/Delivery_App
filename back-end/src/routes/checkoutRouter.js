const checkoutRouter = require('express').Router();
const checkout = require('../controllers/controller.checkout');

checkoutRouter.post('/checkout', checkout);

module.exports = checkoutRouter;