import Header from "../../components/Header"
import { Container, Row, Col } from 'react-bootstrap';
import RegisterForm from '../../components/RegisterForm';
import { GlobalContext } from '../../components/GlobalStorage';
import { USER_REGISTER } from '../../api';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Loading from '../../components/Loading/index';
import ErrorMessage from "../../components/ErrorMessage";
import logo from './../../assets/images/logo.png';
import styles from './styles.module.css';

const Register = () => {
  const { user, setUser, setToken } = useContext(GlobalContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //Caso esteja logado, redireciona para a tela inicial
  useEffect(() => {
    if(user) {
      navigate("/");
    }
  }, [user, navigate]);

  async function handleRegister(name, email, password) {
    setError("");
    const { url, options } = USER_REGISTER({
      name,
      email,
      password
    });
    try {
      setLoading(true);
      const response = await fetch(url, options);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data);
      }
      setToken(data.accessToken);
      setUser(data.user);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col md="6" className="mx-auto d-block">
            <div className="text-center">
              <img src={logo} className={styles.logo + ' my-5'} alt="Clothing Store" />
            </div>
            {error && <ErrorMessage message={error} />}
            <RegisterForm onRegister={handleRegister} />
          </Col>
        </Row>
      </Container>
      {loading && <Loading />}
    </>
  )
}

export default Register