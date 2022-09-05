import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Context from '../../context/context';
import orders from '../../services/orders.service';

export default function OrderDetails() {
  const { sessionUser } = useContext(Context);
  const [userOrder, setUserOrder] = useState();
  const { id } = useParams();

  const fetchData = async () => {
    const data = await orders.getAllOrders(sessionUser.id);
    const order = data.filter((item) => Number(item.id) === Number(id));
    setUserOrder(order);
  };

  useEffect(() => {
    fetchData();
  }, [setUserOrder, sessionUser]);

  return (
    <>
      <Navbar />
      {
        userOrder && userOrder.map((order) => (
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
