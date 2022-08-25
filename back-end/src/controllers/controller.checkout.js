const checkoutService = require('../services/checkout.service');

const checkout = async (req, res) => {
    const { id } = res.locals;
    const response = await checkoutService.create(req.body, id);
    res.status(200).json(response);
  };

module.exports = checkout;