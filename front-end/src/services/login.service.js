import axios from 'axios';
import jwt from 'jwt-decode';
import Swal from 'sweetalert2';
import storage from '../utils/storage';

const URL = process.env.REACT_APP_HOSTNAME;
const PORT = process.env.REACT_APP_BACKEND_PORT;

const host = axios.create({
  baseURL: `http://${URL}:${PORT}`,
  timeout: 10000,
});

async function makeLogin(email, password) {
  const loginObj = { email, password };
  try {
    const { data: { token } } = await host.post('/login', loginObj);
    if (token) {
      const data = jwt(token);
      storage.setLocalStorage('token', token);
      const user = {
        id: data.id,
        name: data.name,
        email: data.email,
        role: data.role,
        token,
      };
      storage.setLocalStorage('user', user);
      return true;
    }
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Invalid email or password',
      footer: `
      <span data-testid="common_login__element-invalid-email">
        Invalid email or password
      </span>`,
    });
    return false;
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${err.message}`,
      footer: `
      <span data-testid="common_login__element-invalid-email">
        Invalid email  or password
      </span>`,
    });
  }
}

export default makeLogin;
