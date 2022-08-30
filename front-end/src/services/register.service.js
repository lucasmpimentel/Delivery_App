import axios from 'axios';
import Swal from 'sweetalert2';

const URL = process.env.REACT_APP_HOSTNAME;
const PORT = process.env.REACT_APP_BACKEND_PORT;

const host = axios.create({
  baseURL: `http://${URL}:${PORT}`,
  timeout: 10000,
});

export default async function Register(name, email, password) {
  const user = { name, email, password, role: 'customer' };
  try {
    const { data } = await host.post('/register', user);
    return { ...data };
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${err.message}`,
      footer: `
      <span data-testid="common_register__element-invalid_register">
        Invalid register
      </span>`,
    });
  }
}