const { Sales, salesProduct } = require('../database/models');
const { sequelize } = require('../database/models')

const create = async ({
  user_id,seller_id, total_price, delivery_address, delivery_number,
  sale_date, status: saleStatus, product_id, quantity,}) => {
  try { await sequelize.transaction(async function (transaction) {
    const allSales = await Sales.create({
      user_id,seller_id, total_price, delivery_address, delivery_number,
      sale_date, status: saleStatus },
    { transaction });
     await salesProduct.create({
      sale_id: allSales.id, product_id, quantity,
    }, { transaction });
    return allSales; });
  } catch (error) {
    console.log('error');
  } 
};

module.exports = { create };
 