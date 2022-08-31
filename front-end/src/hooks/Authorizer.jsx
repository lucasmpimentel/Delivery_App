import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import context from '../context/context';

function Authorizer() {
  const {
    authorized,
  } = useContext(context);

  if (!authorized) {
    return <Navigate to="/login" />;
  }
  return (
    <Outlet />
  );
}

export default Authorizer;
