import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Authorizer from './hooks/Authorizer';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';

export default function Index() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/" element={ <Authorizer /> }>
        <Route path="" element={ <Home /> } />
      </Route>
    </Routes>
  );
}