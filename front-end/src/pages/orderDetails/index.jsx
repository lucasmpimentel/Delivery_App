import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Navbar from '../../components/Navbar';
import Context from '../../context/context';
import sale from '../../services/sale.details';
import sellerService from '../../services/seller.service';

export default function OrderDetails() {
  const ZERO = 0;
  const { sessionUser } = useContext(Context);
  const [userSale, setUserSale] = useState();
  const [saleProducts, setSaleProducts] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [sellerName, setSellerName] = useState();
  const { id } = useParams();

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

  return (
    <>
      <Navbar />
      <h1>detalhes</h1>

      <p data-testid="customer_order_details__element-order-details-label-order-id">
        Pedido
        {' '}
        {id}
      </p>
      <p data-testid="customer_order_details__element-order-details-label-seller-name">
        P.Vend:
        {' '}
        {sellerName}
      </p>
      <p data-testid="customer_order_details__element-order-details-label-order-date">
        {' '}
        {moment(userSale?.saleDate).format('DD/MM/YYYY')}
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        {' '}
        {userSale?.status}
      </p>
      <button
        data-testid="customer_order_details__button-delivery-check"
        type="button"
        disabled
      >
        MARCAR COMO ENTREGUE

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
                    `customer_order_details__element-order-table-item-number-${index}`
                  }
                >
                  {index + 1}
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-name-${index}`
                  }
                >
                  {i.name}
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-quantity-${index}`
                  }
                >
                  {i.amount}
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-unit-price-${index}`
                  }
                >
                  {i.price.replace('.', ',')}
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-sub-total-${index}`
                  }
                >
                  {multiply(i.price, i.amount)}
                </td>
              </tr>
            ))
          }
          <tr>
            <td
              data-testid="customer_order_details__element-order-total-price"
            >
              {`Total: R$ ${totalPrice?.replace('.', ',')}`}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
