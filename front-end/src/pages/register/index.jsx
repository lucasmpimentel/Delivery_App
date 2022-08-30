import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbArrowBackUp } from 'react-icons/tb';
import Context from '../../context/context';
import register from '../../services/register.service';
// import * as C from './styles';

export default function Register() {
  const MIN_NAME = 12;
  const MIN_PASSWORD = 6;
  const EMAIL_REGEX = /^[\w.-]+@[\w.-]+\.[\w]+(\.[\w]+)?$/i;
  const navigate = useNavigate();
  const {
    setAuthorized,
    // authorized,
  } = useContext(Context);
  const [userState, setUserState] = useState({
    name: '',
    email: '',
    userPassword: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserState({ ...userState, [name]: value });
  };

  useEffect(() => {
    const testName = userState.name.length >= MIN_NAME;
    const testEmail = EMAIL_REGEX.test(userState.email);
    const testPass = userState.userPassword.length >= MIN_PASSWORD;
    if (testEmail && testPass && testName) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [userState]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, userPassword } = userState;
      const status = await register(name, email, userPassword);
      setAuthorized(status);
      return navigate('/login');
    } catch (err) {
      setAuthorized(false);
    }
  };

  return (
    <main>
      <button
        type="button"
        name="btnSplashScreen"
        onClick={ () => navigate('/') }
      >
        <TbArrowBackUp />
      </button>
      <h1>Cadastro</h1>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          name="name"
          data-testid="common_register__input-name"
          aria-label="name"
          value={ userState.name }
          onChange={ handleChange }
          placeholder="Nome"
        />
        <input
          type="email"
          name="email"
          data-testid="common_register__input-email"
          aria-label="email"
          value={ userState.email }
          onChange={ handleChange }
          placeholder="Email"
        />
        <input
          type="password"
          data-testid="common_register__input-password"
          aria-label="password"
          min={ MIN_PASSWORD }
          name="userPassword"
          value={ userState.userPassword }
          onChange={ handleChange }
          placeholder="Senha"
        />
        <label htmlFor="checkbox">
          <input type="checkbox" id="checkbox" name="checkbox" />
          Declaro que li e concordo com os termos de uso.
        </label>
        <button
          data-testid="common_register__button-register"
          type="submit"
          disabled={ isDisabled }
        >
          Cadastrar
        </button>
      </form>
    </main>
  );
}
