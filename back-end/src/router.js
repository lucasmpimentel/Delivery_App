const express = require('express');
const loginController = require('./controllers/controller.login');
const { validateLogin } = require('./middleware/middleware.login');

const router = express.Router();

router.use('/login', validateLogin, loginController);

module.exports = router;
