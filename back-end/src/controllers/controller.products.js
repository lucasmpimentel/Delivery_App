const productsService = require('../services/products.service');

const getAllProducts = async (req, res) => {
  const products = await productsService.findAll();
  res.status(200).json(products);
};

module.exports = { getAllProducts };
