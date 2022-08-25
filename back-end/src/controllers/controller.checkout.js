const express = require('express');

const checkoutService = require('../services/checkout.service');

const checkoutRouter = express.Router();

checkoutRouter.post(
  '/',
  async (req, res) => {
    const { id } = res.locals;
    const response = await checkoutService.create(req.body, id);
    res.status(200).json(response);
  },
);
module.exports = checkoutRouter;