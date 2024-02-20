import { GlobalContext } from '../components/GlobalStorage';
import { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { setUser, setToken } = useContext(GlobalContext);
  const navigate = useNavigate();

  //Caso esteja logado
  useEffect(() => {
    setUser(null);
    setToken(null);
    navigate("/");
  }, []);

  return (
    <>
    </>
  )
}

export default Logout