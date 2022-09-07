import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@material-ui/styles';
import Context from '../../context/context';
import makeLogin from '../../services/login.service';
import auth from '../../utils/auth';
import * as My from './style';
import animation from '../../assets/images/OrangeAnimation.svg';
import logo from '../../assets/images/logo.png';
import Input from '../../components/shared/Input';
import Button from '../../components/shared/Button';
// import Loading from '../../components/Loading';

export default function Login() {
  const navigate = useNavigate();
  const theme = useTheme;
  const {
    // isLoading,
    // setIsLoading,
    setAuthorized,
    authorized,
    setSessionUser,
  } = useContext(Context);
  const [user, setUser] = useState({ email: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(true);
  const regEx = /^[\w.-]+@[\w.-]+\.[\w]+(\.[\w]+)?$/i;
  const MIN_PASS = 6;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    const userLogged = auth.checkAuth();
    if (authorized || userLogged) {
      setSessionUser({ ...userLogged });
      setAuthorized(true);
      if (userLogged.role === 'administrator') {
        return navigate('/admin/manage');
      }
      return navigate(`/${userLogged.role}`);
      /* return navigate('/seller/orders/3'); */
    }
    const testEmail = regEx.test(user.email);
    const testPass = user.password.length >= MIN_PASS;
    if (testEmail && testPass) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // setIsLoading(true);
      const { email, password } = user;
      const status = await makeLogin(email, password);
      const userLocalStorage = JSON.parse(localStorage.getItem('user'));
      setAuthorized(status);
      // setIsLoading(false);
      if (status && userLocalStorage.role === 'seller') {
        return navigate('/seller/orders');
      } if (status) return navigate('/customer/products');
    } catch (err) {
      // setIsLoading(false);
      setAuthorized(false);
    }
  };

  // return isLoading ? (
  //   <Loading />
  // ) : (
  return (
    <My.Main>
      <My.Img src={ animation } alt="Delivery App" />
      <div>
        <My.Form onSubmit={ handleSubmit }>
          <My.Logo src={ logo } alt="Delivery App Logo" />
          {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
          <Input
            aria-label="email"
            id="email"
            inputProps={
              { 'data-testid': 'common_login__input-email' }
            }
            type="email"
            name="email"
            variant="standard"
            placeholder="Email"
            value={ user.email }
            onChange={ handleChange }
          />
          <Input
            aria-label="password"
            id="password"
            inputProps={
              { 'data-testid': 'common_login__input-password' }
            }
            type="password"
            name="password"
            variant="standard"
            placeholder="Senha"
            value={ user.password }
            onChange={ handleChange }
          />
          <Button
            data-testid="common_login__button-login"
            type="submit"
            color={ theme.primary }
            disabled={ isDisabled }
            variant="contained"
          >
            Entrar
          </Button>
          <Button
            data-testid="common_login__button-register"
            type="button"
            color={ theme.primary }
            variant="contained"
            onClick={ () => navigate('/register') }
          >
            Cadastre-se!
          </Button>
        </My.Form>
      </div>
    </My.Main>
  );
}
