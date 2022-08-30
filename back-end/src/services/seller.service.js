const { sale } = require("../database/models");
const { constructError } = require("../middleware/middleware.error");

const updateStatus = async (status, id) => {
  const findSale = await sale.findOne({where:{id}})
  if (!findSale){
    throw constructError(404, "Venda não encontrada")
  }
  const [allSales] = await sale.update({ status }, { where: { id } });
  console.log("Cheguei no seller service", allSales);
  if(allSales === 1){
    return {message:"status atualizado"};
  }
  throw constructError(401, "Venda não atualizada, insira novo status válido");
};

module.exports = { updateStatus };
