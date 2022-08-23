import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';

export default function Index() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
    </Routes>
  );
}
