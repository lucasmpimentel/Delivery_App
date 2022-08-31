import axios from 'axios';
import Swal from 'sweetalert2';
import storage from '../utils/storage';

const URL = process.env.REACT_APP_HOSTNAME;
const PORT = process.env.REACT_APP_BACKEND_PORT;

const token = storage.getLocalStorage('token');

const host = axios.create({
  baseURL: `http://${URL}:${PORT}`,
  headers: { authorization: token },
  timeout: 10000,
});

async function getAll() {
  try {
    const data = await host.get('/products').then((res) => res.data);
    return data;
  } catch (err) {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Unauthorized!',
    });
    return false;
  }
}

export default {
  getAll,
};
