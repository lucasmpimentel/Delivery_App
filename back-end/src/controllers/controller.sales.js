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

const getSaleByUserId = async (req, res) => {
  const { id } = req.params;
  const response = await salesService.findSaleByUserId(id);
  res.status(200).json(response);
};

module.exports = { getAllSales, getSale, getSalesAndProducts, getSaleByUserId };
