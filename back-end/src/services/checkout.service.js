const { Sales, SalesProduct } = require('../database/models');
const { sequelize } = require('../database/models');
const { constructError } = require('../middleware/middleware.error');

const create = async ({
  user_id,seller_id, total_price, delivery_address, delivery_number,
  itens}, id) => {
  if(id !== Number(user_id)) {
    throw constructError(401, "Não autorizado") 
  }

  const newSale = await sequelize.transaction(async function (transaction) {
    const allSales = await Sales.create({
      user_id,seller_id, total_price, delivery_address,
      delivery_number},
    { transaction });

    const formatForBulk = itens.map((item) => ({
      sale_id: allSales.id, product_id: item.product_id, quantity: item.quantity, 
    })); 

    await SalesProduct.bulkCreate(formatForBulk, { transaction });
    return allSales.id;
  });
  return newSale;
};

module.exports = { create };
 