import { Button, Form } from 'react-bootstrap';
import { useState } from "react";
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    onLogin(email, password);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={({ target }) => setEmail(target.value)} required />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" value={password} onChange={({ target }) => setPassword(target.value)} required />
        </Form.Group>
        <div className="mb-3">
          Ainda não possui uma conta? Crie uma clicando <Link to="/register">aqui</Link>
        </div>
        <Button variant="custom-bg" type="submit">
          Entrar
        </Button>
      </Form>
    </>
  )
}

LoginForm.propTypes = {
  onLogin: PropTypes.func
}

export default LoginForm