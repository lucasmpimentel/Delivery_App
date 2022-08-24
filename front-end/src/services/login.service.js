import axios from 'axios';
import jwt from 'jwt-decode';
import Swal from 'sweetalert2';

const URL = process.env.REACT_APP_HOSTNAME;
const PORT = process.env.REACT_APP_BACKEND_PORT;

const host = axios.create({
  baseURL: `http://${URL}:${PORT}`,
  timeout: 10000,
});

async function makeLogin(email, password) {
  const loginObj = { email, password };
  try {
    const { token } = await host
      .post('/login', loginObj)
      .then((res) => res.data)
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.message}`,
          footer: `
          <span data-testid="common_login__element-invalid-email">
            Invalid email
          </span>`,
        });
      });
    const { data } = jwt(token);
    const result = {
      ...data,
      token,
    };
    if (token) return result;
    throw new Error('Erro no servidor de autenticação');
  } catch (err) {
    throw new Error('Erro na autenticação');
  }
}

export default makeLogin;
