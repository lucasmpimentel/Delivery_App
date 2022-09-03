import axios from 'axios';
import storage from '../utils/storage';

const URL = process.env.REACT_APP_HOSTNAME;
const PORT = process.env.REACT_APP_BACKEND_PORT;

export default async function makeMyOrders() {
  try {
    const token = storage.getLocalStorage('token');
    const { id } = storage.getLocalStorage('user');

    const host = axios.create({
      baseURL: `http://${URL}:${PORT}`,
      headers: { authorization: token },
      timeout: 10000,
    });
    const data = await host.get(`/sales/user/${id}`).then((res) => res.data);
    return data;
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${err.message}`,
      /* footer: `
      <span data-testid="common_register__element-invalid_register">
        Invalid register
      </span>`, */
    });
  }
}
