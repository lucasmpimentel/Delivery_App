const salesService = require('../services/sales.service');

const getAllSales = async (req, res) => {
  const products = await salesService.findAll();
  res.status(200).json(products);
};

const getSale = async (req, res) => {
  const product = await salesService.findById(req.params.id);
  res.status(200).json(product);
};

const getSalesAndProducts = async (req, res) => {
  const products = await salesService.salesAndProducts();
  res.status(200).json(products);
};

module.exports = { getAllSales, getSale, getSalesAndProducts };
