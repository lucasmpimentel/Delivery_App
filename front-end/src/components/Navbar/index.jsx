import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../context/context';
import storage from '../../utils/storage';

export default function Navbar() {
  const { sessionUser, setSessionUser } = useContext(Context);

  useEffect(() => {
    const name = storage.getLocalStorage('name');
    const email = storage.getLocalStorage('email');
    const role = storage.getLocalStorage('role');
    setSessionUser({ name, email, role });
  }, []);

  return (
    <div className="nav">
      <Link
        data-testid="customer_products__element-navbar-link-products"
        to="/customer/products"
      >
        PRODUTOS

      </Link>
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        to="/customer/checkout"
      >
        MEUS PEDIDOS

      </Link>
      <Link
        data-testid="customer_products__element-navbar-user-full-name"
        to="/"
      >
        {sessionUser.name}

      </Link>
      <Link
        data-testid="customer_products__element-navbar-link-logout"
        to="/logout"
      >
        Sair

      </Link>
    </div>
  );
}
