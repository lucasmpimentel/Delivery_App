const { Products } = require('../database/models');

const findAll = async () => {
  const allProducts = await Products.findAll();
  return allProducts;
};

module.exports = { findAll };
