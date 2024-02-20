import { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Container } from 'react-bootstrap';
import { GET_GAME } from '../api';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { useParams } from 'react-router-dom';
import GameDetails from '../components/GameDetails';

const Game = () => {
  const { id } = useParams();
  const [game, setGame] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const { url, options } = GET_GAME(id);
    setLoading(true);
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro HTTP ${response.status}`);
        }
        setError("");
        return response.json();
      })
      .then((data) => {
        setGame(data);
      }).catch((e) => {
        setError(e.message);
        setGame([]);
      }).finally(() => {
        setLoading(false);
      })
  }, [id]);

  return (
    <>
      <Header />
      <Container>
        {error && <ErrorMessage message={error} />}
        <GameDetails {...game} />
      </Container>
      {loading && <Loading />}
    </>
  )
}

export default Game