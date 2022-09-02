import { useEffect, useState, useContext } from 'react';
import MyOrderCart from '../../components/MyOrderCart';
// import { useNavigate } from 'react-router-dom';
// import Context from '../../context/context';
import makeMyOrders from '../../services/myOrders.service';

export default function MyOrders() {
  const [ordersList, setOrdersList] = useState([]);

  useEffect(
    async () => {
      const allOrders = await makeMyOrders();
      setOrdersList(allOrders);
    },
    // () => {
    //   setAuthorized(false);
    //   setSessionUser({});
    //   localStorage.clear();
    //   sessionStorage.clear();

    //   return navigate('/login');
    // },
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
