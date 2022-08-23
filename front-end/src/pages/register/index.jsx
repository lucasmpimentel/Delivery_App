import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbArrowBackUp } from 'react-icons/tb';
// import * as C from './styles';
import Swal from 'sweetalert2';

export default function Register() {
  const MIN_NAME = 3;
  const MIN_PASSWORD = 6;
  const EMAIL_REGEX = /^[\w.-]+@[\w.-]+\.[\w]+(\.[\w]+)?$/i;
  const navigate = useNavigate();
  const [userState, setUserState] = useState({
    name: '',
    lastname: '',
    email: '',
    userPassword: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserState({ ...userState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validName = userState.name.length > MIN_NAME;
    const validEmail = EMAIL_REGEX.test(userState.email);
    if (validName && validEmail && validPass) {
      /* const resp = await singUpConnection(singup);
      if (resp === 'Sucess') {
        navigate('/login');
      } else {
        global.alert(resp.message);
      } */
      navigate('/');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        footer: `
        <span data-testid="common_register__element-invalid_register">
          Invalid register
        </span>`,
      });
      // global.alert('Dados Incorretos');
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
        <button data-testid="common_register__button-register" type="submit">
          Cadastrar
        </button>
      </form>
    </main>
  );
}
