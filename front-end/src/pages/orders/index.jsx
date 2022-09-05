import { useEffect, useState, useContext } from 'react';
import Context from '../../context/context';
import MyOrderCart from '../../components/MyOrderCart';
import orders from '../../services/orders.service';
import Navbar from '../../components/Navbar';

export default function Orders() {
  const [ordersList, setOrdersList] = useState(null);
  const { sessionUser } = useContext(Context);

  const fetchOrders = async () => {
    const allOrders = await orders.getAllOrders(sessionUser.id);
    setOrdersList(allOrders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <main>
      <Navbar />
      { ordersList && ordersList?.map((order) => (
        <MyOrderCart
          key={ order.id }
          id={ order.id }
          status={ order.status }
          data={ order.saleDate }
          totalPrice={ order.totalPrice }
        />
      ))}
    </main>
  );
}
