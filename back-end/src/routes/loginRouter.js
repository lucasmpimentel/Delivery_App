const loginRouter = require('express').Router();
const { loginUser, registerUser } = require('../controllers/controller.login');
const {
  validateLogin,
  validateRegistration,
} = require('../middleware/middleware.login');

loginRouter.post('/login', validateLogin, loginUser);
loginRouter.post('/register', validateRegistration, registerUser);
module.exports = loginRouter;
