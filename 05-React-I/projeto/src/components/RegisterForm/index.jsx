import { Button, Form } from 'react-bootstrap';
import { useState } from "react";
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const RegisterForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    onSubmit(name, email, dateOfBirth, state, country, password);
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
          <Form.Label>Data de nascimento</Form.Label>
          <Form.Control type="date" value={dateOfBirth} onChange={({ target }) => setDateOfBirth(target.value)} required />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Estado</Form.Label>
          <Form.Control type="text" value={state} onChange={({ target }) => setState(target.value)} required />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>País</Form.Label>
          <Form.Control type="text" value={country} onChange={({ target }) => setCountry(target.value)} required />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" value={password} onChange={({ target }) => setPassword(target.value)} required />
        </Form.Group>

        <div className="mb-3">
          Já possui uma conta? Faça login clicando <Link to="/login">aqui</Link>
        </div>
        <Button variant="custom-bg" type="submit">
          Entrar
        </Button>
      </Form>
    </>
  )
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func
}

export default RegisterForm