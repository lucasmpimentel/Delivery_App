const sellerService = require('../services/seller.service');

const updateStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const response = await sellerService.updateStatus(status, id);
    res.status(200).json(response);
  };

  const getSeller = async (_req, res) => {
    const findSeller = await sellerService.getSeller();
    res.status(200).json(findSeller);
  };

  module.exports = { updateStatus, getSeller };
