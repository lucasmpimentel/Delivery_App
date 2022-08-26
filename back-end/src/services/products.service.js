const { product } = require('../database/models');

const findAll = async () => {
  const allProducts = await product.findAll();
  return allProducts;
};

module.exports = { findAll };
