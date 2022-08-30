import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import context from '../context/context';
/* import auth from '../utils/auth'; */

function Authorizer() {
  const {
    authorized,
  } = useContext(context);

  /* const verifyAuth = () => {
    const user = auth.checkAuth();
    if (user) return user;
    return false;
  }; */

  if (!authorized) {
    /* try {
      const user = verifyAuth();
      if (user) {
        return <Outlet />;
      }
      return <Navigate to="/login" />;
    } catch (err) { */
    <Navigate to="/login" />;
    // }
  }
  return (
    <Outlet />
  );
}

export default Authorizer;
