import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbArrowBackUp } from 'react-icons/tb';
import { useTheme } from '@material-ui/styles';
import Context from '../../context/context';
import register from '../../services/register.service';
import * as My from './styles';
import registerImg from '../../assets/images/RegisterImg.svg';
import logo from '../../assets/images/logo.png';
import Input from '../../components/shared/Input';
import Button from '../../components/shared/Button';
// import iconArrowBack from '../../assets/images/iconArrowBack.svg';

export default function Register() {
  const theme = useTheme;
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
    <My.Main>
      <My.ArrowBack
        type="button"
        name="btnSplashScreen"
        onClick={ () => navigate('/') }
      >
        <TbArrowBackUp />
        {/* <img src={ iconArrowBack } alt="Ícone de seta para voltar" /> */}
      </My.ArrowBack>
      <My.Content>
        <My.Img src={ registerImg } alt="Delivery App" />
        <My.Form onSubmit={ handleSubmit }>
          <My.Logo src={ logo } alt="Delivery App Logo" />
          <Input
            type="text"
            name="name"
            inputProps={
              { 'data-testid': 'common_register__input-name' }
            }
            // data-testid="common_register__input-name"
            aria-label="name"
            value={ userState.name }
            onChange={ handleChange }
            placeholder="Nome"
          />
          <Input
            type="email"
            name="email"
            inputProps={
              { 'data-testid': 'common_register__input-email' }
            }
            // data-testid="common_register__input-email"
            aria-label="email"
            value={ userState.email }
            onChange={ handleChange }
            placeholder="Email"
          />
          <Input
            type="password"
            inputProps={
              { 'data-testid': 'common_register__input-password' }
            }
            // data-testid="common_register__input-password"
            aria-label="password"
            min={ MIN_PASSWORD }
            name="userPassword"
            value={ userState.userPassword }
            onChange={ handleChange }
            placeholder="Senha"
          />
          <My.Label htmlFor="checkbox">
            <input type="checkbox" id="checkbox" name="checkbox" />
            Declaro que li e concordo com os termos de uso.
          </My.Label>
          <Button
            data-testid="common_register__button-register"
            type="submit"
            color={ theme.primary }
            disabled={ isDisabled }
            variant="contained"
          >
            Cadastrar
          </Button>
        </My.Form>
      </My.Content>
    </My.Main>
  );
}
