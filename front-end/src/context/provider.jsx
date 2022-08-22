import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

function Provider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [sessionUser, setSessionUser] = useState({
    id: 0,
    name: '',
    lastname: '',
    email: '',
    isActive: false,
  });

  const context = useMemo(() => ({
    isLoading,
    setIsLoading,
    authorized,
    setAuthorized,
    sessionUser,
    setSessionUser,
  }), [isLoading]);

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
