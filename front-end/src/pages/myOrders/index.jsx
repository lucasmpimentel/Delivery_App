import { useEffect, useState} from 'react';
import MyOrderCart from '../../components/MyOrderCart';
import makeMyOrders from '../../services/myOrders.service';

export default function MyOrders() {
  const [ordersList, setOrdersList] = useState([]);

  useEffect(
    async () => {
      const allOrders = await makeMyOrders();
      setOrdersList(allOrders);
    },
    [],

  );

  return (
    <section>
      { ordersList && ordersList.map((order) => (
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
