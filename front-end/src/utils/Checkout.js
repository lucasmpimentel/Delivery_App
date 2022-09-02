export default class Checkout {
  userId;

  sellerId;

  totalPrice;

  deliveryAdress;

  deliveryNumber;

  itens;

  constructor(user, delivery, total, itens) {
    this.userId = user;
    this.sellerId = delivery.sellerId;
    this.totalPrice = total;
    this.deliveryAdress = delivery.street;
    this.deliveryNumber = delivery.number;
    this.itens = itens.map((item) => ({ productId: item.id, quantity: item.amount }));
  }
}
