import { Button, Form } from 'react-bootstrap';
import { useState } from "react";
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const RegisterForm = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    onRegister(name, email, password);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" value={name} onChange={({ target }) => setName(target.value)} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={({ target }) => setEmail(target.value)} required />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" value={password} onChange={({ target }) => setPassword(target.value)} required />
        </Form.Group>

        <div className="mb-3">
          Já possui uma conta? Faça login clicando <Link to="/login">aqui</Link>
        </div>
        <Button variant="custom-bg" type="submit">
          Registrar
        </Button>
      </Form>
    </>
  )
}

RegisterForm.propTypes = {
  onRegister: PropTypes.func
}

export default RegisterForm