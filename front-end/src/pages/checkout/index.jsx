import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/context';
import CheckoutTable from '../../components/CheckoutTable';
import AdressForm from '../../components/AdressForm';
import Navbar from '../../components/Navbar';
import Checkout from '../../utils/Checkout';
import makeCheckout from '../../services/checkout.service';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { shoppingCart, totalPrice, sessionUser } = useContext(Context);
  const [delivery, setDelivery] = useState({ sellerId: '2', street: '', number: '' });

  const handleClick = async () => {
    const checkout = new Checkout(sessionUser.id, delivery, totalPrice, shoppingCart);
    const orderId = await makeCheckout(checkout);
    navigate(`/customer/orders/${orderId}`);
  };

  const handleChange = ({ target }) => {
    console.log(target.value);
    const { name, value } = target;
    setDelivery({ ...delivery, [name]: value });
    console.log(delivery);
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
