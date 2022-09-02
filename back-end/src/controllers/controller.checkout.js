const checkoutService = require('../services/checkout.service');

const checkout = async (req, res) => {
    const { id } = res.locals;
    const response = await checkoutService.create(req.body, id);
    res.status(201).json(response);
  };

module.exports = checkout;

/* {
  "userId": 2,
  "sellerId": 1, 
  "totalPrice": 26.30, 
  "deliveryAddress": "Rua A", 
  "deliveryNumber": "Rua B",
  "itens": [{
    "productId": 5, 
    "quantity": 12
  }, 
  {
    "productId": 2, 
    "quantity": 16
  },
  {
    "productId": 8, 
    "quantity": 3
  }]
} */
