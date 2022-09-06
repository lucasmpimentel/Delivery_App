const { sale, user, salesProduct, product } = require('../database/models');
const { constructError } = require('../middleware/middleware.error');

const updateStatus = async (status, id) => {
  const findSale = await sale.findOne({ where: { id } });
  if (!findSale) {
    throw constructError(404, 'Venda não encontrada');
  }
  const [allSales] = await sale.update({ status }, { where: { id } });
  if (allSales === 1) {
    return { message: 'status atualizado' };
  }
  throw constructError(401, 'Venda não atualizada, insira novo status válido');
};

const getSeller = async () => {
  const findAllSeller = await user.findAll({ where: { role: 'seller' } });
  return findAllSeller;
};

const getSaleSeller = async (sellerId) => {
  const findAllSeller = await sale.findAll({
    where: { sellerId },
    include: {
      model: salesProduct,
      attributes: { exclude: ['saleId', 'productId'] },
      include: { model: product, as: 'product' },
    },
  });
  return findAllSeller;
};

module.exports = { updateStatus, getSeller, getSaleSeller };
