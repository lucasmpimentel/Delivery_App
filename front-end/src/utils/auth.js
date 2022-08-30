import jwt from 'jwt-decode';
import storage from './storage';

function checkAuth() {
  try {
    const token = storage.getLocalStorage('token');
    if (token) {
      const data = jwt(token);
      const { id, name, email, role } = data;
      if (id && name && email && role) {
        return data;
      }
      return false;
    }
    return false;
  } catch (err) {
    throw new Error(err.message);
  }
}

function getUser(token) {
  const { data } = jwt(token);
  return data;
}

export default {
  checkAuth,
  getUser,
};
