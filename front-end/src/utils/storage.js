function setLocalStorage(key, value) {
  const data = JSON.stringify(value);
  localStorage.setItem(key, data);
}

function getLocalStorage(key) {
  try {
    let data = localStorage.getItem(key);
    if (data) {
      data = JSON.parse(data);
    }
    return data;
  } catch (err) {
    throw new Error('Chave local não encontrada');
  }
}

function setSessionStorage(key, value) {
  const data = JSON.stringify(value);
  sessionStorage.setItem(key, data);
}

function getSessionStorage(key) {
  try {
    let data = sessionStorage.getItem(key);
    if (data) {
      data = JSON.parse(data);
    }
    return data;
  } catch (err) {
    throw new Error('Chave de sessão não encontrada');
  }
}

export default {
  setLocalStorage,
  getLocalStorage,
  setSessionStorage,
  getSessionStorage,
};
