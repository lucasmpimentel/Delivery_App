import React, { useState, useContext } from 'react';
import Context from '../../context/context';
import CheckoutTable from '../../components/CheckoutTable';
import AdressForm from '../../components/AdressForm';
import Navbar from '../../components/Navbar';
import Checkout from '../../utils/Checkout';

export default function CheckoutPage() {
  const { shoppingCart, totalPrice } = useContext(Context);
  const [delivery, setDelivery] = useState({ street: '', number: '' });

  /* -------------Modelo para o Back ----------
    {
      "userId": 2, -------------   - Trocar por email -
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

  const handleClick = () => {
    const checkout = new Checkout('1', delivery, totalPrice, shoppingCart);
    console.log(checkout);
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
        <AdressForm adress={ delivery } setAdress={ setDelivery } />
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
