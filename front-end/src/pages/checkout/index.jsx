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
  const [delivery, setDelivery] = useState({ sellerId: '', street: '', number: '' });

  /* -------------Modelo para o Back ----------
    {
      "userId": 2,
      "sellerId": 1, ------------  - Qual o endpoint -
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
    }
  ------------------------------------------------ */

  const handleClick = async () => {
    const checkout = new Checkout(sessionUser.id, delivery, totalPrice, shoppingCart);
    const orderId = await makeCheckout(checkout);
    navigate(`/customer/checkout/${orderId}`);
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
