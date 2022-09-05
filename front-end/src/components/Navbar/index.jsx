import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountBox from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ViewListIcon from '@material-ui/icons/ViewList';
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
            <ShoppingBasketIcon />
            <My.Typo
              variant="h6"
              data-testid="customer_products__element-navbar-link-products"
            >
              Produtos
            </My.Typo>
          </My.NavButton>
          <My.NavButton onClick={ () => navigate('/customer/orders') }>
            <ViewListIcon />
            <My.Typo
              variant="h6"
              data-testid="customer_products__element-navbar-link-orders"
            >
              Meus Pedidos
            </My.Typo>
          </My.NavButton>
        </My.Div>
        <My.Div>
          <My.NavButton onClick={ () => navigate('/') }>
            <AccountBox />
            <My.Typo
              data-testid="customer_products__element-navbar-user-full-name"
              variant="h6"
            >
              {sessionUser.name}
            </My.Typo>
          </My.NavButton>
          <My.NavButton onClick={ () => navigate('/logout') }>
            <ExitToAppIcon />
            <My.Typo
              data-testid="customer_products__element-navbar-link-logout"
              variant="h6"
              to="/logout"
            >
              Sair
            </My.Typo>
          </My.NavButton>
        </My.Div>
      </My.ToolBar>
    </My.NavBar>
  );
}
