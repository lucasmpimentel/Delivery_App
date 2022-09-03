import React, { useContext, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Context from '../../context/context';
import storage from '../../utils/storage';
import * as My from './style';

export default function Navbar() {
  const navigate = useNavigate();
  const { sessionUser, setSessionUser } = useContext(Context);

  useEffect(() => {
    const user = storage.getLocalStorage('user');
    setSessionUser({ ...user });
  }, []);

  return (
    <My.NavBar className="nav">
      <My.ToolBar>
        <My.Div>
          <My.NavButton onClick={ () => navigate('/customer/products') }>
            <Typography
              variant="h6"
              data-testid="customer_products__element-navbar-link-products"
            >
              PRODUTOS
            </Typography>
          </My.NavButton>
          <My.NavButton onClick={ () => navigate('/customer/orders') }>
            <Typography
              variant="h6"
              data-testid="customer_products__element-navbar-link-products"
            >
              MEUS PEDIDOS
            </Typography>
          </My.NavButton>
        </My.Div>
        <My.Div>
          <NavLink
            data-testid="customer_products__element-navbar-user-full-name"
            to="/"
          >
            {sessionUser.name}

          </NavLink>
          <NavLink
            data-testid="customer_products__element-navbar-link-logout"
            to="/logout"
          >
            Sair

          </NavLink>
        </My.Div>
      </My.ToolBar>
    </My.NavBar>
  );
}
