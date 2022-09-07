import axios from 'axios';
import Swal from 'sweetalert2';
import storage from '../utils/storage';

const URL = process.env.REACT_APP_HOSTNAME;
const PORT = process.env.REACT_APP_BACKEND_PORT;

const ERROR = 'Somenthing goes wrong, try again later!';

async function getSale(userId, saleId) {
  try {
    const token = storage.getLocalStorage('token');

    const host = axios.create({
      baseURL: `http://${URL}:${PORT}`,
      headers: { authorization: token },
      timeout: 10000,
    });
    const data = await host.get(`/seller/${userId}`).then((res) => res.data);

    return data.filter((sale) => sale.id === Number(saleId));
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: ERROR,
    });
  }
}

async function prepareOrder(saleId) {
  try {
    const token = storage.getLocalStorage('token');

    const host = axios.create({
      baseURL: `http://${URL}:${PORT}`,
      headers: { authorization: token },
      timeout: 10000,
    });
    await host.patch(`/seller/${saleId}`, { status: 'Preparando' })
      .then((res) => res.data);
    return 'Preparando';
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: ERROR,
    });
  }
}

async function dispatchOrder(saleId) {
  try {
    const token = storage.getLocalStorage('token');

    const host = axios.create({
      baseURL: `http://${URL}:${PORT}`,
      headers: { authorization: token },
      timeout: 10000,
    });
    await host.patch(`/seller/${saleId}`, { status: 'Em Trânsito' })
      .then((res) => res.data);
    return 'Em Trânsito';
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: ERROR,
    });
  }
}

async function receiveOrder(saleId) {
  try {
    const token = storage.getLocalStorage('token');

    const host = axios.create({
      baseURL: `http://${URL}:${PORT}`,
      headers: { authorization: token },
      timeout: 10000,
    });
    await host.patch(`/seller/${saleId}`, { status: 'Entregue' })
      .then((res) => res.data);
    return 'Entregue';
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: ERROR,
    });
  }
}

export default { getSale, prepareOrder, dispatchOrder, receiveOrder };
