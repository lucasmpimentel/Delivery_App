import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import jwt from 'jwt-decode';
import context from '../context/context';
import auth from '../utils/auth';

function Authorizer() {
  const {
    authorized,
    setSessionUser,
  } = useContext(context);

  const verifyAuth = () => {
    const token = auth.checkAuth();
    if (token) {
      const { data } = jwt(token);
      const { id, name, email, role } = data;
      if (id && name && email && role) {
        return data;
      }
    }
    return false;
  };

  if (!authorized) {
    try {
      const user = verifyAuth();
      setSessionUser(user);
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
