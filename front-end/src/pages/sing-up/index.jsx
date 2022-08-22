import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbArrowBackUp } from 'react-icons/tb';
import * as C from './styles';
import { IEvent } from '../../global/interfaces/global.event';
import BackBtn from '../../global/components/shared/BackBtn';
import OutlineBtn from '../../global/components/shared/OutlineBtn';
import Input from '../../global/components/shared/Input';
import './index.css';

export default function SingUp() {
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

  const handleChange = ({ target }: any) => {
    const { name, value }: IEvent = target;
    setUserState({ ...userState, [name]: value });
  };

  const checkPassword = (password: string, confirmation: string) => {
    if (password === confirmation && password.length >= MIN_PASSWORD) {
      return true;
    }
    return false;
  };

  const handleSubmit = async (e: any) => {
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
      <BackBtn
        type="button"
        name="btnSplashScreen"
        onClick={() => navigate('/')}
      >
        <TbArrowBackUp />
      </BackBtn>
      <C.Title>Cadastro</C.Title>
      <C.Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          aria-label="name"
          value={userState.name}
          onChange={handleChange}
          placeholder="Nome"
        />
        <Input
          type="text"
          name="lastname"
          aria-label="lastname"
          value={userState.lastname}
          onChange={handleChange}
          placeholder="Sobrenome"
        />
        <Input
          type="email"
          name="email"
          aria-label="email"
          value={userState.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <Input
          type="password"
          aria-label="password"
          min={MIN_PASSWORD}
          name="userPassword"
          value={userState.userPassword}
          onChange={handleChange}
          placeholder="Senha"
        />
        <Input
          type="password"
          min={MIN_PASSWORD}
          aria-label="confirmPassword"
          name="confirmationPassword"
          value={userState.confirmationPassword}
          onChange={handleChange}
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
