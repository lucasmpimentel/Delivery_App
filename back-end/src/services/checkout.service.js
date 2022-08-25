const { Sales, SalesProduct } = require('../database/models');
const { sequelize } = require('../database/models')

const create = async ({
  user_id,seller_id, total_price, delivery_address, delivery_number,
  product_id, quantity,}) => {

  await sequelize.transaction(async function (transaction) {
    const allSales = await Sales.create({
      user_id,seller_id, total_price, delivery_address,
      delivery_number},
    { transaction });
     const salesProductTest = await SalesProduct.create({
      sale_id: allSales.id, product_id, quantity,
    }, { transaction });
    console.log(" salesProductTest ==>", salesProductTest);
    return allSales; });
};

module.exports = { create };
 