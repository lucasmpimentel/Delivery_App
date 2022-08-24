const express = require('express');

const productsService = require('../services/products.service');

const productsRouter = express.Router();

productsRouter.get('/', async (req, res) => {
  const products = await productsService.findAll(req.body);
  res.status(200).json(products);
});

module.exports = productsRouter;
