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

export default {
  setLocalStorage,
  getLocalStorage,
};
