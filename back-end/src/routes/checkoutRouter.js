const checkoutRouter = require('express').Router();
const checkout = require('../controllers/controller.checkout');
const authenticateMiddleware = require('../middleware/middleware.auth');

checkoutRouter.post('/checkout', authenticateMiddleware, checkout);

module.exports = checkoutRouter;