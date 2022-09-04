import { useEffect, useState } from 'react';
import MyOrderCart from '../../components/MyOrderCart';
import makeMyOrders from '../../services/orders.service';

export default function Orders() {
  const [ordersList, setOrdersList] = useState(null);

  const fetchOrders = async () => {
    const allOrders = await makeMyOrders();
    setOrdersList(allOrders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <section>
      { ordersList && ordersList?.map((order) => (
        <MyOrderCart
          key={ order.id }
          id={ order.id }
          status={ order.status }
          data={ order.saleDate }
          totalPrice={ order.totalPrice }
        />
      ))}
    </section>
  );
}
