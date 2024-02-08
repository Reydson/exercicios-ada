import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import CommentList from "./components/CommentList";
import CommentForm from './components/CommentForm';
import { Container } from "react-bootstrap";

function App() {
  const [comments, setComments] = useState([
    {
      id: 1,
      conteudo: "Ótimo artigo! Muito esclarecedor.",
      data: "2024-02-07",
      autor: {
        nome: "Maria Silva",
        foto: "avatar.png",
        email: "maria.silva@example.com",
      },
    },
    {
      id: 2,
      conteudo: "Adorei ler isso, obrigado por compartilhar!",
      data: "2024-02-06",
      autor: {
        nome: "João Souza",
        foto: "avatar2.png",
        email: "joao.souza@example.com",
      },
    },
    {
      id: 3,
      conteudo: "Esse é um assunto muito importante, obrigado por abordá-lo.",
      data: "2024-02-05",

      autor: {
        nome: "Ana Oliveira",
        foto: "avatar3.png",
        email: "ana.oliveira@example.com",
      },
    },
    {
      id: 4,
      conteudo: "Excelente trabalho! Continue assim.",
      data: "2024-02-04",
      autor: {
        nome: "Pedro Santos",
        foto: "avatar4.png",
        email: "pedro.santos@example.com",
      },
    },
    {
      id: 5,
      conteudo: "Estou aprendendo muito com esses artigos. Parabéns!",
      data: "2024-02-03",
      autor: {
        nome: "Carla Lima",
        foto: "avatar5.png",
        email: "carla.lima@example.com",
      },
    },
    {
      id: 6,
      conteudo: "Muito interessante, vou compartilhar com meus colegas.",
      data: "2024-02-02",
      autor: {
        nome: "José Ferreira",
        foto: "avatar.png",
        email: "jose.ferreira@example.com",
      },
    },
  ]);

  function adicionarComentario(comentario) {
    const maiorId = comments.reduce((acumulador, comment) => {
      if(comment.id > acumulador) {
        return comment.id;
      }
      return acumulador;
    }, 0);

    const novoComentario = {
      id: maiorId + 1,
      conteudo: comentario,
      data: new Date().toISOString().split('T')[0],
      autor: {
        nome: "José Ferreira",
        foto: "avatar.png",
        email: "jose.ferreira@example.com",
      },
    };
    setComments([...comments, novoComentario]);
  }

  return (
    <Container>
      <CommentList comments={comments} />
      <CommentForm onSubmit={(valor) => adicionarComentario(valor)}/>
    </Container>
  );
}

export default App;
