import axios from 'axios';
import Swal from 'sweetalert2';
import storage from '../utils/storage';

const URL = process.env.REACT_APP_HOSTNAME;
const PORT = process.env.REACT_APP_BACKEND_PORT;

async function getSale(userId, saleId) {
  try {
    const token = storage.getLocalStorage('token');

    const host = axios.create({
      baseURL: `http://${URL}:${PORT}`,
      headers: { authorization: token },
      timeout: 10000,
    });
    const data = await host.get(`/sales/details/${userId}`).then((res) => res.data);

    return data.filter((sale) => sale.id === Number(saleId));
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Somenthing goes wrong, try again later!',
    });
  }
}

export default { getSale };
