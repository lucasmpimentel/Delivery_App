import axios from 'axios';
import Swal from 'sweetalert2';

const URL = process.env.REACT_APP_HOSTNAME;
const PORT = process.env.REACT_APP_BACKEND_PORT;

const host = axios.create({
  baseURL: `http://${URL}:${PORT}`,
  timeout: 10000,
});

export default async function getAllProducts() {
  try {
    const data = await host.get('/products').then((res) => res.data);
    console.log('aquiiiiiiiiiiiiiiiiiiiiiiiiiiiiii', data);
    return data;
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${err.message}`,
      footer: `
      <span>
        Error!
      </span>`,
    });
  }
}
