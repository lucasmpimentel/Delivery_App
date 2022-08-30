import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/context';

export default function Logoff() {
  const { setAuthorized, setSessionUser } = useContext(Context);
  const navigate = useNavigate();

  useEffect(
    () => {
      setAuthorized(false);
      setSessionUser({});
      localStorage.clear();
      sessionStorage.clear();

      return navigate('/login');
    },
    [],

  );

  return <h1>Volte Sempre!</h1>;
}
