const { Sales } = require('../database/models');

const create = async () => {
  const allProducts = await Sales.create();
  return allProducts;
};

module.exports = { create };