import { useEffect, useState } from 'react';
import SellerOrdersTable from '../../components/SellerOrdersTable';
import makeMyOrders from '../../services/myOrders.service';

export default function SellerOrders() {
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
        <SellerOrdersTable
          key={ order.id }
          id={ order.id }
          status={ order.status }
          data={ order.saleDate }
          totalPrice={ order.totalPrice }
          deliveryAddress={ order.deliveryAddress }
          deliveryNumber={ order.deliveryNumber }
        />
      ))}
    </section>
  );
}
