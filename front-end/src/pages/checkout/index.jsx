import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/context';
import CheckoutTable from '../../components/CheckoutTable';
import AdressForm from '../../components/AdressForm';
import Navbar from '../../components/Navbar';
import Checkout from '../../utils/Checkout';
import makeCheckout from '../../services/checkout.service';
import storage from '../../utils/storage';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { shoppingCart, totalPrice, sessionUser, setShoppingCart } = useContext(Context);
  const [delivery, setDelivery] = useState({ sellerId: '2', street: '', number: '' });

  const handleClick = async () => {
    const checkout = new Checkout(sessionUser.id, delivery, totalPrice, shoppingCart);
    const orderId = await makeCheckout(checkout);
    setShoppingCart([]);
    storage.setLocalStorage('cart', '');
    navigate(`/customer/orders/${orderId}`);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setDelivery({ ...delivery, [name]: value });
  };

  return (
    <main>
      <Navbar />
      <section>
        <p>Finalizar pedido:</p>
        <CheckoutTable />
      </section>
      <section>
        <p>Detalhes e Endereço para Entrega</p>
        <AdressForm delivery={ delivery } setDelivery={ handleChange } />
        <button
          type="button"
          onClick={ handleClick }
          data-testid="customer_checkout__button-submit-order"
        >
          FINALIZAR PEDIDO
        </button>
      </section>
    </main>
  );
}
