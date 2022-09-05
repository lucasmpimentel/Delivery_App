import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import context from '../context/context';

function Authorizer() {
  const {
    authorized,
    sessionUser,
  } = useContext(context);

  if (!authorized || sessionUser.role !== 'seller') {
    return <Navigate to="/login" />;
  }
  return (
    <Outlet />
  );
}

export default Authorizer;
