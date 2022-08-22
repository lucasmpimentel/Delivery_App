import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbArrowBackUp } from 'react-icons/tb';
import * as C from './styles';

export default function SignUp() {
  const MIN_NAME = 3;
  const MIN_PASSWORD = 6;
  const EMAIL_REGEX = /^[\w.-]+@[\w.-]+\.[\w]+(\.[\w]+)?$/i;
  const navigate = useNavigate();
  const [validPass, setValidPass] = useState(false);
  const [userState, setUserState] = useState({
    name: '',
    lastname: '',
    email: '',
    userPassword: '',
    confirmationPassword: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserState({ ...userState, [name]: value });
  };

  const checkPassword = (password, confirmation) => (
    !!(password === confirmation && password.length >= MIN_PASSWORD)
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validName = userState.name.length > MIN_NAME;
    const validEmail = EMAIL_REGEX.test(userState.email);
    setValidPass(checkPassword(userState.userPassword, userState.confirmationPassword));
    if (validName && validEmail && validPass) {
      /* const resp = await singUpConnection(singup);
      if (resp === 'Sucess') {
        navigate('/login');
      } else {
        global.alert(resp.message);
      } */
      navigate('/');
    } else {
      global.alert('Dados Incorretos');
    }
  };

  return (
    <C.Main>
      <button
        type="button"
        name="btnSplashScreen"
        onClick={ () => navigate('/') }
      >
        <TbArrowBackUp />
      </button>
      <C.Title>Cadastro</C.Title>
      <C.Form onSubmit={ handleSubmit }>
        <input
          type="text"
          name="name"
          aria-label="name"
          value={ userState.name }
          onChange={ handleChange }
          placeholder="Nome"
        />
        <input
          type="text"
          name="lastname"
          aria-label="lastname"
          value={ userState.lastname }
          onChange={ handleChange }
          placeholder="Sobrenome"
        />
        <input
          type="email"
          name="email"
          aria-label="email"
          value={ userState.email }
          onChange={ handleChange }
          placeholder="Email"
        />
        <input
          type="password"
          aria-label="password"
          min={ MIN_PASSWORD }
          name="userPassword"
          value={ userState.userPassword }
          onChange={ handleChange }
          placeholder="Senha"
        />
        <input
          type="password"
          min={ MIN_PASSWORD }
          aria-label="confirmPassword"
          name="confirmationPassword"
          value={ userState.confirmationPassword }
          onChange={ handleChange }
          placeholder="Confirme sua senha"
        />
        <C.Pass
          className={
            validPass || userState.confirmationPassword.length === 0 ? (
              'hidden'
            ) : 'show'
          }
        >
          Senhas não coincidem
        </C.Pass>
        <C.CBLabel htmlFor="checkbox">
          <input type="checkbox" id="checkbox" name="checkbox" />
          Declaro que li e concordo com os termos de uso.
        </C.CBLabel>
        <OutlineBtn type="submit">
          Cadastrar
        </OutlineBtn>
      </C.Form>
    </C.Main>
  );
}
