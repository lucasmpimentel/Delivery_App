import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Navbar from '../../components/Navbar';
import Context from '../../context/context';
import sellerDetails from '../../services/seller.details.service';
import sellerService from '../../services/seller.service';

export default function SellerDetails() {
  const ZERO = 0;
  const { sessionUser } = useContext(Context);
  const [userSale, setUserSale] = useState();
  const [saleProducts, setSaleProducts] = useState();
  const [prepareButton, setPrepareButton] = useState(true);
  const [dispatchButton, setDispatchButton] = useState(true);
  const [orderStatus, setOrderStatus] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [sellerName, setSellerName] = useState();
  const { id } = useParams();

  const checkButtonStatus = (status) => {
    if (status === 'Pendente') {
      setPrepareButton(false);
    }
    if (status === 'Preparando') {
      setDispatchButton(false);
    }
    if (status === 'Em Trânsito') {
      setDispatchButton(true);
    }
  };

  useEffect(() => {
    const fetchSale = async () => {
      const [data] = await sellerDetails.getSale(sessionUser.id, id);
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

  const multiply = (price, amount) => {
    const result = price * amount;
    return result.toFixed(2).replace('.', ',');
  };

  const handleOrderPreparing = async () => {
    const status = await sellerDetails.prepareOrder(id);
    setOrderStatus(status);
    setPrepareButton(true);
    setDispatchButton(false);
  };

  const handleDispatch = async () => {
    const status = await sellerDetails.dispatchOrder(id);
    setOrderStatus(status);
    setDispatchButton(true);
  };
  return (
    <>
      <Navbar />
      <h1>detalhes</h1>

      <p data-testid="seller_order_details__element-order-details-label-order-id">
        Pedido
        {' '}
        {id}
      </p>
      <p data-testid="seller_order_details__element-order-details-label-seller-name">
        P.Vend:
        {' '}
        {sellerName}
      </p>
      <p data-testid="seller_order_details__element-order-details-label-order-date">
        {' '}
        {moment(userSale?.saleDate).format('DD/MM/YYYY')}
      </p>
      <p
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        {' '}
        {orderStatus}
      </p>
      <button
        data-testid="seller_order_details__button-preparing-check"
        type="button"
        disabled={ prepareButton }
        onClick={ handleOrderPreparing }
      >
        PREPARAR PEDIDO

      </button>
      <button
        data-testid="seller_order_details__button-dispatch-check"
        type="button"
        disabled={ dispatchButton }
        onClick={ handleDispatch }
      >
        SAIU PARA ENTREGA
      </button>
      <hr />

      <table>
        <thead>
          <tr>
            <td>Item</td>
            <td>Descrição</td>
            <td>Quantidade</td>
            <td>Valor Unitário</td>
            <td>Sub-total</td>
          </tr>
        </thead>
        <tbody>
          {
            saleProducts?.map((i, index) => (
              <tr key={ index }>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-item-number-${index}`
                  }
                >
                  {index + 1}
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-name-${index}`
                  }
                >
                  {i.name}
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-quantity-${index}`
                  }
                >
                  {i.amount}
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-unit-price-${index}`
                  }
                >
                  {i.price.replace('.', ',')}
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-sub-total-${index}`
                  }
                >
                  {multiply(i.price, i.amount)}
                </td>
              </tr>
            ))
          }
          <tr>
            <td
              data-testid="seller_order_details__element-order-total-price"
            >
              {`Total: R$ ${totalPrice?.replace('.', ',')}`}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
