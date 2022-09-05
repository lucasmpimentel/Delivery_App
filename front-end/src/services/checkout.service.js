import axios from 'axios';
import Swal from 'sweetalert2';
import storage from '../utils/storage';

const URL = process.env.REACT_APP_HOSTNAME;
const PORT = process.env.REACT_APP_BACKEND_PORT;

export default async function makeCheckout(checkout) {
  try {
    const token = storage.getLocalStorage('token');

    const host = axios.create({
      baseURL: `http://${URL}:${PORT}`,
      headers: { authorization: token },
      timeout: 10000,
    });
    const { data: id } = await host.post('/checkout', checkout);
    return id;
  } catch (err) {
    const SERVER_ERROR = 500;
    const AUTH_ERROR = 401;
    const { response: { status } } = err;
    if (status === SERVER_ERROR || status === AUTH_ERROR) {
      localStorage.clear();
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Unauthorized!',
      }).then(() => window.location.reload());
    }
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${err.message}`,
    });
  }
}
