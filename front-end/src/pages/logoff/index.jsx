import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/context';
import storage from '../../utils/storage';

export default function Logoff() {
  const { setAuthorized, setSessionUser } = useContext(Context);
  const navigate = useNavigate();

  useEffect(
    () => {
      setAuthorized(false);
      setSessionUser({});
      storage.setSessionStorage('token', '');

      return navigate('/login');
    },
    [],

  );

  return <h1>Volte Sempre!</h1>;
}
