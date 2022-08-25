const express = require('express');
const loginController = require('./controllers/controller.login');
const productsController = require('./controllers/controller.products');
const checkoutController = require('./controllers/controller.checkout');
const authenticateMiddleware = require('./middleware/middleware.auth');
const { validateLogin } = require('./middleware/middleware.login');

const router = express.Router();

router.use('/login', validateLogin, loginController);

router.use('/products', authenticateMiddleware, productsController);

router.use('/checkout', checkoutController);

module.exports = router;
