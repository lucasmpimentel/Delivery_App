import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/context';
import makeLogin from '../../services/login.service';
import auth from '../../utils/auth';
import Loading from '../../components/Loading';

export default function Login() {
  const navigate = useNavigate();
  const {
    isLoading,
    setIsLoading,
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
      return navigate('/customer/products');
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
      setIsLoading(true);
      const { email, password } = user;
      const status = await makeLogin(email, password);
      setAuthorized(status);
      setIsLoading(false);
      if (status) return navigate('/customer/products');
    } catch (err) {
      setIsLoading(false);
      setAuthorized(false);
      console.log(err.message);
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <main>
      <form onSubmit={ handleSubmit }>
        <input
          aria-label="email"
          id="email"
          data-testid="common_login__input-email"
          type="email"
          name="email"
          placeholder="Email"
          value={ user.email }
          onChange={ handleChange }
        />
        <input
          aria-label="password"
          id="password"
          data-testid="common_login__input-password"
          type="password"
          name="password"
          placeholder="Senha"
          value={ user.password }
          onChange={ handleChange }
        />
        <button
          data-testid="common_login__button-login"
          type="button"
          disabled={ isDisabled }
          onClick={ handleSubmit }
        >
          Entrar
        </button>
        <button
          data-testid="common_login__button-register"
          type="button"
          onClick={ () => navigate('/register') }
        >
          Cadastre-se!
        </button>
      </form>
    </main>
  );
}
