const express = require('express');
const loginRouter = require('./loginRouter');

const routes = express.Router();

routes.use(loginRouter);

module.exports = routes;
