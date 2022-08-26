const checkoutService = require('../services/checkout.service');

const checkout = async (req, res) => {
    const { id } = res.locals;
    const response = await checkoutService.create(req.body, id);
    res.status(200).json(response);
  };

module.exports = checkout;

/* {
  "user_id": 2,
  "seller_id": 1, 
  "total_price": 26.30, 
  "delivery_address": "Rua A", 
  "delivery_number": "Rua B",
  "itens": [{
    "product_id": 5, 
    "quantity": 12
  }, 
  {
    "product_id": 2, 
    "quantity": 16
  },
  {
    "product_id": 8, 
    "quantity": 3
  }]
} */
