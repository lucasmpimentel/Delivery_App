const express = require('express');

const checkoutService = require('../services/checkout.service');

const checkoutRouter = express.Router();

checkoutRouter.post(
  '/',
  async (req, res) => {
    const id = await checkoutService.create(req.body);
    res.status(200).json(id);
  },
);
module.exports = checkoutRouter;