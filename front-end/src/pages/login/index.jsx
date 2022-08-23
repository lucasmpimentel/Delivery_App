/* eslint-disable no-nested-ternary */
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Context from '../../context/context';
// import makeLogin from '../../global/services/login.service';
// import storage from '../../global/services/storage.services';
import Loading from '../../components/Loading';

export default function Login() {
  const navigate = useNavigate();
  const {
    isLoading,
    setIsLoading,
    setAuthorized,
    // authorized,
  } = useContext(Context);
  const [user, setUser] = useState({ email: '', password: '' });
  const regEx = /^[\w.-]+@[\w.-]+\.[\w]+(\.[\w]+)?$/i;
  const MIN_PASS = 6;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user.email && user.password) {
        const checkEmail = regEx.test(user.email);
        if (!checkEmail) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            // text: 'Something went wrong!',
            footer: `
            <span data-testid="common_login__element-invalid-email">
              Invalid email
            </span>`,
          });
        }
        const checkPassword = user.password.length >= MIN_PASS;
        if (checkEmail && checkPassword) {
          setIsLoading(true);
          // const { email, password } = user;
          // const loggedUser = await makeLogin(email, password);
          // storage.setSessionStorage('sessionUser', loggedUser);
          setAuthorized(true);
          setIsLoading(false);
          return navigate('/');
        }
        throw new Error('Email ou senha inválidos');
      }
      throw new Error('Email ou senha inválidos');
    } catch (err) {
      setIsLoading(false);
      setAuthorized(false);
      // setErrorMsg(err.message);
      // return setModalOpen(true);
    }
  };

  // useEffect(() => {
  //   const userLogged = storage.getSessionStorage('sessionUser');
  //   if (authorized || userLogged) {
  //     navigate('/');
  //   }
  // }, [authorized]);

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
        <button data-testid="common_login__button-login" type="submit">Entrar</button>
        <button
          data-testid="common_login__button-register"
          type="button"
          onClick={ () => navigate('/cadastro') }
        >
          Cadastre-se!
        </button>
        {/* <span
          data-testid="common_login__element-invalid-email"
          className="hidden"
        >
          Login inválido!
        </span> */}
      </form>
    </main>
  );
}
