import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CommentForm = ( {currentComment, onSubmit} ) => {
  const [comment, setComment] = React.useState( currentComment || '');

  function sendComment(e) {
    e.preventDefault();
    onSubmit(comment);
    setComment('');
  }

  return (
    <Form onSubmit={sendComment}>
       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Adicionar comentário</Form.Label>
        <Form.Control as="textarea" value={comment} onChange={(e) => setComment(e.target.value)} rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  )
}

export default CommentForm