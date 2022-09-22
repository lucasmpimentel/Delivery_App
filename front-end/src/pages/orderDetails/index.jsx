import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Context from '../../context/context';
import sale from '../../services/sale.details';
import sellerService from '../../services/seller.service';
import sellerDetails from '../../services/seller.details.service';
import OrdersDetailTable from '../../components/OrdersDetailTable';
import MyOrderDetails from '../../components/MyOrderDetails';
import Button from '../../components/shared/Button';
import * as My from './style';

export default function OrderDetails() {
  const ZERO = 0;
  const {
    sessionUser,
    setTotalPrice,
    saleProducts,
    setSaleProducts,
    userSale,
    setUserSale,
    setSellerName,
    setOrderStatus,
  } = useContext(Context);

  const [receivedButton, setReceivedButton] = useState(true);
  const { id } = useParams();

  const checkButtonStatus = (status) => {
    if (status === 'Em Trânsito') {
      setReceivedButton(false);
    }
  };

  useEffect(() => {
    const fetchSale = async () => {
      const [data] = await sale.getSale(sessionUser.id, id);
      setUserSale(data);

      const serializedProducts = data.salesProducts.map((product) => ({
        amount: product.quantity,
        name: product.product.name,
        price: product.product.price,
        id: product.product.id,
        url_image: product.product.url_image,
      }));
      setSaleProducts(serializedProducts);
      setOrderStatus(data.status);
      checkButtonStatus(data.status);
    };
    fetchSale();
  }, [sessionUser, id]);

  useEffect(() => {
    const fetchSeller = async () => {
      const [{ name }] = await sellerService.getAll(userSale?.sellerId);
      setSellerName(name);
    };
    fetchSeller();
  }, [userSale]);

  useEffect(() => {
    if (saleProducts) {
      const total = saleProducts.reduce((acc, item) => (
        acc + (Number(item.price) * Number(item.amount))
      ), 0);
      if (!total) return setTotalPrice(ZERO.toFixed(2));
      setTotalPrice(total.toFixed(2));
    }
  }, [saleProducts]);

  const handleReceivedOrder = async () => {
    const status = await sellerDetails.receiveOrder(id);
    setOrderStatus(status);
    setReceivedButton(true);
  };
  return (
    <My.Main>
      <Navbar />
      <My.Title variant="h3">Detalhes</My.Title>
      <My.Section>
        <MyOrderDetails />
        <My.Div>
          <OrdersDetailTable />
          <Button
            data-testid="customer_order_details__button-delivery-check"
            type="button"
            disabled={ receivedButton }
            onClick={ handleReceivedOrder }
          >
            MARCAR COMO ENTREGUE
          </Button>
        </My.Div>
      </My.Section>
    </My.Main>
  );
}
