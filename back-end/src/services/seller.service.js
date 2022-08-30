const { sale } = require('../database/models');

const updateStatus = async (status, id) => {
    const allSales = await sale.
    // update({status}, {where: id});
    console.log("Cheguei no seller service", allSales);
  return allSales;
    // await sale.update( {status});
    // return status;
};

module.exports = { updateStatus }