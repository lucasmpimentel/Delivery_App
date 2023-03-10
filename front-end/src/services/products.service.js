import axios from 'axios';
import Swal from 'sweetalert2';

const URL = process.env.REACT_APP_HOSTNAME;
const PORT = process.env.REACT_APP_BACKEND_PORT;

const host = axios.create({
  baseURL: `http://${URL}:${PORT}`,
  timeout: 10000,
});

async function getAll() {
  try {
    const data = await host.get('/products').then((res) => res.data);
    return data;
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Somenthing goes wrong, try again later!',
    });
    return false;
  }
}

export default {
  getAll,
};
