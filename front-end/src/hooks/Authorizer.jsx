import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import context from '../context/context';
import auth from '../utils/auth';

function Authorizer() {
  const {
    authorized,
  } = useContext(context);

  const verifyAuth = () => {
    const data = auth.checkAuth();
    if (data) return data;
    return false;
  };

  if (!authorized) {
    try {
      const user = verifyAuth();
      if (!user) {
        return <Navigate to="/login" />;
      }
      return <Outlet />;
    } catch (err) {
      <Navigate to="/login" />;
    }
  }
  return (
    <Outlet />
  );
}

export default Authorizer;
