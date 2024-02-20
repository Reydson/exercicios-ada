import { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Container, Row } from 'react-bootstrap';
import PageSizeSelector from '../components/PageSizeSelector/index';
import { GET_GAMES } from '../api';
import Loading from '../components/Loading';
import GameCard from '../components/GameCard';
import ErrorMessage from '../components/ErrorMessage';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { Link as ScrollLink } from "react-scroll";
import SearchInput from './../components/SearchInput/index';
import GenreSelector from '../components/GenreSelector';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const {state} = useLocation();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [genre, setGenre] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [pageSize, setPageSize] = useState(12);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //Joga para a primeira página para evitar páginas vazias ao mudar os critérios de busca
  useEffect(() => {
    setPage(1);
  }, [pageSize, searchTerm, genre]);

  //Caso o gênero seja passado no state, define o gênero a ser mostrado
  useEffect(() => {
    setGenre(state?.genre ?  state.genre : '');
  }, [state]);

  useEffect(() => {
    const { url, options } = GET_GAMES(pageSize, page, searchTerm, genre);
    setLoading(true);
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro HTTP ${response.status}`);
        }
        setError("");
        setQuantity(response.headers.get("X-Total-Count"));
        return response.json();
      })
      .then((data) => {
        setGames(data);
      }).catch((e) => {
        setError(e.message);
        setGames([]);
      }).finally(() => {
        setLoading(false);
      })
  }, [page, pageSize, searchTerm, genre]);

  return (
    <>
      <Header />
      <Container>
        <Row className='justify-content-center'>
          <Col className='mt-5 mb-4' lg={6}>
            <SearchInput onSearch={setSearchTerm} />
          </Col>
        </Row>
        <section className='d-flex justify-content-between' id='games'>
          <GenreSelector genre={genre} setGenre={setGenre} />
          <PageSizeSelector value={pageSize} onChange={({target}) => setPageSize(target.value)} />
        </section>
        {error && <ErrorMessage message={error} />}
        <Row element="section">
          {games.map((game) => {
            return <GameCard key={game.id} {...game} />
          })}
        </Row>
        {!games.length && !error && <p>Nada encontrado :(</p>}
        <ScrollLink to='games'>
          <PaginationControl
            page={page}
            between={3}
            total={quantity}
            limit={pageSize}
            changePage={setPage}
            ellipsis={1}
          />
        </ScrollLink>
      </Container>
      {loading && <Loading />}
    </>
  )
}

export default Home