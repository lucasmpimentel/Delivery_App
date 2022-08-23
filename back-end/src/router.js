const express = require('express');
const loginController = require('./controllers/controller.login');

const router = express.Router();

router.use('/login', loginController);

module.exports = router;

