const { sale, salesProduct } = require('../database/models');
const { constructError } = require('../middleware/middleware.error');

const findAll = async () => {
  const allSales = await sale.findAll();
  return allSales;
};

const findById = async (id) => {
  const saleId = await sale.findByPk(+id);
  if (!saleId) {
    throw constructError(400, 'id não encontrado');
  }
  return saleId; 
};

const salesAndProducts = async () => {
  const allSales = await sale.findAll(
    { include: { model: salesProduct, attributes: { exclude: ['saleId'] } },
  },
);
  return allSales;
};

const findSaleByUserId = async (userId) => {
  console.log(userId);
  console.log(typeof userId);
  const saleById = await sale.findAll(
    { where: { userId } },
  );
  return saleById;
};

module.exports = { findAll, findById, salesAndProducts, findSaleByUserId };
