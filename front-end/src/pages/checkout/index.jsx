import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/context';
import CheckoutTable from '../../components/CheckoutTable';
import AdressForm from '../../components/AdressForm';
import Navbar from '../../components/Navbar';
import Checkout from '../../utils/Checkout';
import makeCheckout from '../../services/checkout.service';
import Button from '../../components/shared/Button';
import * as My from './style';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [delivery, setDelivery] = useState({ sellerId: '2', street: '', number: '' });
  const {
    shoppingCart,
    totalPrice,
    setTotalPrice,
    sessionUser,
    setShoppingCart,
  } = useContext(Context);

  const handleClick = async () => {
    const checkout = new Checkout(sessionUser.id, delivery, totalPrice, shoppingCart);
    const orderId = await makeCheckout(checkout);
    localStorage.removeItem('cart');
    navigate(`/customer/orders/${orderId}`);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setDelivery({ ...delivery, [name]: value });
  };

  useEffect(() => () => {
    setShoppingCart(null);
    setTotalPrice(0);
  }, [setShoppingCart]);

  return (
    <My.Main>
      <Navbar />
      <My.TSection>
        <div>
          <My.P variant="h4">Detalhes e Endereço para Entrega</My.P>
          <AdressForm delivery={ delivery } setDelivery={ handleChange } />
        </div>
        <CheckoutTable />
      </My.TSection>
      <Button
        type="button"
        onClick={ handleClick }
        data-testid="customer_checkout__button-submit-order"
      >
        FINALIZAR PEDIDO
      </Button>
    </My.Main>
  );
}
