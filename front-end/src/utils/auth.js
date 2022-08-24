import storage from './storage';

function checkAuth() {
  try {
    const getSessionUser = storage.getSessionStorage('sessionUser');
    if (getSessionUser) {
      return getSessionUser;
    }
    /* const getLocalToken = storage.getLocalStorage('token');
    if (getLocalToken) {
      return user;
    } */
    return false;
  } catch (err) {
    throw new Error(err.message);
  }
}

export default {
  checkAuth,
};
