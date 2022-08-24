const express = require('express');
const loginController = require('./controllers/controller.login');
const productsController = require('./controllers/controller.products');
const authenticateMiddleware = require('./middleware/middleware.auth');
const { validateLogin } = require('./middleware/middleware.login');

const router = express.Router();

router.use('/login', validateLogin, loginController);

router.use('/products', authenticateMiddleware, productsController);

module.exports = router;
