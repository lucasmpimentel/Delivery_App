import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { Typography } from '@material-ui/core';
import Context from '../../context/context';
import Div from './style';

export default function MyOrderDetails() {
  const { sellerName, userSale, orderStatus } = useContext(Context);
  const { id } = useParams();

  return (
    <Div>
      <Typography
        data-testid="customer_order_details__element-order-details-label-order-id"
        variant="h4"
      >
        Pedido
        {' '}
        {id}
      </Typography>
      <Typography
        variant="body1"
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        P.Vendedora:
        {' '}
        {sellerName}
      </Typography>
      <Typography
        variant="body1"
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        Data do Pedido:
        {' '}
        {moment(userSale?.saleDate).format('DD/MM/YYYY')}
      </Typography>
      <Typography
        variant="h5"
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        {' '}
        {orderStatus}
      </Typography>
    </Div>
  );
}
