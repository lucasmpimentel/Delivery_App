import axios from 'axios';
import jwt from 'jwt-decode';

const URL = process.env.REACT_APP_HOSTNAME;
const PORT = process.env.REACT_APP_BACKEND_PORT;

const host = axios.create({
  baseURL: `${URL}:${PORT}`,
  timeout: Number(process.env.REACT_APP_TIMEOUT),
});

async function makeLogin(email, password) {
  const loginObj = { email, password };
  try {
    const { token } = await host
      .post('/login', loginObj)
      .then((res) => res.data)
      .catch((err) => new Error(err.message));
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
