const loginRouter = require('express').Router();
const loginController = require('../controllers/controller.login');
const {
  validateLogin,
  validateRegistration,
} = require('../middleware/middleware.login');

loginRouter.post('/login', validateLogin, loginController.loginUser);
loginRouter.post(
  '/register',
  validateRegistration,
  loginController.registerUser,
);
module.exports = loginRouter;
