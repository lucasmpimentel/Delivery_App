import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Authorizer from './hooks/Authorizer';
import Login from './pages/login';
import Register from './pages/register';
import Products from './pages/products';
import Checkout from './pages/checkout';
import Logoff from './pages/logoff';
import CheckoutDetails from './pages/orderDetails';

export default function Index() {
  return (
    <Routes>
      <Route path="" element={ <Navigate to="login" /> } />
      <Route path="login" element={ <Login /> } />
      <Route path="register" element={ <Register /> } />
      <Route path="logout" element={ <Logoff /> } />
      <Route path="customer" element={ <Authorizer /> }>
        <Route index element={ <Navigate to="products" /> } />
        <Route path="products" element={ <Products /> } />
        <Route path="checkout" element={ <Checkout /> } />
        <Route path="orders/:id" element={ <CheckoutDetails /> } />
      </Route>
    </Routes>
  );
}
