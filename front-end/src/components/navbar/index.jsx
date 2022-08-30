import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../context/context';
import auth from '../../utils/auth';

export default function Navbar() {
  const { sessionUser, setSessionUser } = useContext(Context);

  useEffect(() => {
    const data = auth.checkAuth();
    setSessionUser(data);
  }, []);

  return (
    <div className="nav">
      <Link to="/customer/products">PRODUTOS</Link>
      <Link to="/customer/checkout">MEUS PEDIDOS</Link>
      <Link to="/">{sessionUser.name}</Link>
      <Link to="/logout">Sair</Link>
    </div>
  );
}
