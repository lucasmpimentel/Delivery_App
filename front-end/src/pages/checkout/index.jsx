import React, { useState } from 'react';
import CheckoutTable from '../../components/CheckoutTable';
import AdressForm from '../../components/AdressForm';

export default function Checkout() {
  const [adress, setAdress] = useState({ street: '', number: '' });

  const handleClick = () => {
    console.log('clicou');
  };

  return (
    <main>
      <div><h1>HEADER</h1></div>
      <section>
        <p>Finalizar pedido:</p>
        <CheckoutTable />
      </section>
      <section>
        <p>Detalhes e Endereço para Entrega</p>
        <AdressForm adress={ adress } setAdress={ setAdress } />
        <button
          type="button"
          onClick={ handleClick }
        >
          FINALIZAR PEDIDO
        </button>
      </section>
    </main>
  );
}
