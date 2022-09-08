import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

function Provider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [shoppingCart, setShoppingCart] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [userOrders, setUserOrders] = useState([]);
  const [sessionUser, setSessionUser] = useState({
    id: 0,
    name: '',
    lastname: '',
    email: '',
    isActive: false,
  });

  const context = useMemo(() => ({
    isLoading,
    setIsLoading,
    authorized,
    shoppingCart,
    totalPrice,
    setAuthorized,
    sessionUser,
    setSessionUser,
    setShoppingCart,
    setTotalPrice,
    userOrders,
    setUserOrders,
  }), [isLoading,
    authorized,
    shoppingCart,
    totalPrice, sessionUser, userOrders, setUserOrders]);

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
