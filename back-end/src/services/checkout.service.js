const { Sales, SalesProduct } = require('../database/models');
const { sequelize } = require('../database/models');
const { constructError } = require('../middleware/middleware.error');

const create = async (
  { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, itens }, id) => {
  if (id !== Number(userId)) {
    throw constructError(401, 'Não autorizado');
  }
  const newSale = await sequelize.transaction(async (transaction) => {
    const allSales = await Sales.create(
      {
        userId, sellerId, totalPrice, deliveryAddress, deliveryNumber }, { transaction },
    );

    const formatForBulk = itens.map((item) => ({
      saleId: allSales.id,
      productId: item.product_id,
      quantity: item.quantity,
    }));

    await SalesProduct.bulkCreate(formatForBulk, { transaction });
    return allSales.id;
  });
  return newSale;
};

module.exports = { create };
