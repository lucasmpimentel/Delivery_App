import storage from './storage';

function checkAuth() {
  try {
    const getToken = storage.getSessionStorage('token');
    if (getToken) {
      return getToken;
    }
    return false;
  } catch (err) {
    throw new Error(err.message);
  }
}

export default {
  checkAuth,
};
