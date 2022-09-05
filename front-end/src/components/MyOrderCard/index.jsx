import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as My from './style';
import './status.css';

export default function MyOrderCart({ id, status, data, totalPrice }) {
  const [statusColor, setStatusColor] = useState('pending');
  const lengthData = 10;
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'Preparando') {
      setStatusColor('preparing');
    } if (status === 'Entregue') {
      setStatusColor('done');
    } else {
      setStatusColor('pending');
    }
  }, [status]);

  return (
    <My.OrderBtn
      variant="outlined"
      onClick={ () => navigate(`/customer/orders/${id}`) }
    >
      <div>
        <h3 data-testid={ `customer_orders__element-order-id-${id}` }>
          Pedido
          {' '}
          {id}
        </h3>
      </div>
      <div className={ statusColor }>
        <h3 data-testid={ `customer_orders__element-delivery-status-${id}` }>
          {status}
        </h3>
      </div>
      <div>
        <h4 data-testid={ `customer_orders__element-order-date-${id}` }>
          {
            data.slice(0, lengthData).split('-').reverse().join('/')
          }
        </h4>
        <div>
          <h4 data-testid={ `customer_orders__element-card-price-${id}` }>
            {totalPrice.replace('.', ',')}
          </h4>
        </div>
      </div>
    </My.OrderBtn>
  );
}

MyOrderCart.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
};
