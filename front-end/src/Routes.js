import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Authorizer from './hooks/Authorizer';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import Checkout from './pages/checkout';
import Logoff from './pages/logoff';

export default function Index() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/logout" element={ <Logoff /> } />
      <Route path="/" element={ <Authorizer /> }>
        <Route path="customer/products" element={ <Home /> } />
        <Route path="customer/checkout" element={ <Checkout /> } />
      </Route>
    </Routes>
  );
}
