export default class Checkout {
  userId;

  sellerId;

  totalPrice;

  deliveryAdress;

  deliveryNumber;

  itens;

  constructor(user, delivery, total, itens) {
    this.userId = user;
    this.sellerId = delivery.seller;
    this.totalPrice = total;
    this.deliveryAdress = delivery.adress;
    this.deliveryNumber = delivery.number;
    this.itens = itens;
  }
}
