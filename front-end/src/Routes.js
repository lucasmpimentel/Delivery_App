import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Authorizer from './hooks/Authorizer';
import AuthSeller from './hooks/AuthSeller';
import Login from './pages/login';
import Register from './pages/register';
import Products from './pages/products';
import Checkout from './pages/checkout';
import Logoff from './pages/logoff';
import Orders from './pages/orders';
import OrdersDetails from './pages/orderDetails';

export default function Index() {
  return (
    <Routes>
      <Route path="" element={ <Navigate to="login" /> } />
      <Route path="login" element={ <Login /> } />
      <Route path="register" element={ <Register /> } />
      <Route path="logout" element={ <Logoff /> } />
      <Route path="seller" element={ <AuthSeller /> }>
        <Route index element={ <Navigate to="orders" /> } />
        <Route path="orders" element={ <Orders /> } />
        <Route path="orders/:id" element={ <OrdersDetails /> } />
      </Route>
      <Route path="customer" element={ <Authorizer /> }>
        <Route index element={ <Navigate to="products" /> } />
        <Route path="products" element={ <Products /> } />
        <Route path="orders" element={ <Orders /> } />
        <Route path="checkout" element={ <Checkout /> } />
        <Route path="orders/:id" element={ <OrdersDetails /> } />
      </Route>
    </Routes>
  );
}
