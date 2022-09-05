import { useEffect, useState, useContext } from 'react';
import Navbar from '../../components/Navbar';
import SellerOrdersTable from '../../components/SellerOrdersTable';
import orders from '../../services/orders.service';
import Context from '../../context/context';

export default function SellerOrders() {
  const [ordersList, setOrdersList] = useState(null);
  const { sessionUser } = useContext(Context);

  const fetchOrders = async () => {
    const allOrders = await orders.getAllSellerOrders(sessionUser.id);
    setOrdersList(allOrders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <main>
      <Navbar />
      <section className="order-section">
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
    </main>
  );
}
