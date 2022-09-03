export default class Checkout {
  userId;

  sellerId;

  totalPrice;

  deliveryAddress;

  deliveryNumber;

  itens;

  constructor(user, delivery, total, itens) {
    this.userId = user;
    this.sellerId = delivery.sellerId;
    this.totalPrice = total;
    this.deliveryAddress = delivery.street;
    this.deliveryNumber = delivery.number;
    this.itens = itens.map((item) => ({
      productId: item.id,
      quantity: item.amount,
    }));
  }
}
