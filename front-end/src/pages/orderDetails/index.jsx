import React, { useContext, useEffect } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Context from '../../context/context';
import orders from '../../services/orders.service';

export default function OrderDetails() {
  const { sessionUser, userOrders, setUserOrders } = useContext(Context);

  const fetchData = async () => {
    const data = await orders.getAllOrders(sessionUser.id);
    setUserOrders(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <h2>ORDERS</h2>
      {
        userOrders.map((order) => (
          <div key={ order.id }>
            <Link to={ `/customer/orders/${order.id}` }>

              <p data-testid={ `customer_orders__element-order-id-${order.id}` }>
                Pedido
                {' '}
                {order.id}
              </p>
              <p
                data-testid={ `customer_orders__element-delivery-status-${order.id}` }
              >
                {order.status}

              </p>
              <p
                data-testid={ `customer_orders__element-order-date-${order.id}` }
              >
                {moment(order.saleDate).format('DD/MM/YYYY')}
              </p>
              <p
                data-testid={ `customer_orders__element-card-price-${order.id}` }
              >
                R$
                {' '}
                {order.totalPrice.replace('.', ',')}
              </p>
              <hr />

            </Link>
          </div>
        ))
      }
    </>
  );
}
