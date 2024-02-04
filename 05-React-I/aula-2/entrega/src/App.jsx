import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './components/MovieList';
import { Container } from 'react-bootstrap';

function App() {

  const movies = [
    {
      id: 1,
      title: "O Poderoso Chefão",
      image: "20120876.webp",
      genre: "Policial",
      releaseYear: 2022,
      rating: 5
    },
    {
      id: 2,
      title: "A Lista de Schindler",
      image: "2904073.jpg-c_310_420_x-f_jpg-q_x-xxyxx.jpg",
      genre: "Drama",
      releaseYear: 2019,
      rating: 4
    },
    {
      id: 3,
      title: "Um Sonho de Liberdade",
      image: "20083748.jpg-c_310_420_x-f_jpg-q_x-xxyxx.jpg",
      genre: "Drama",
      releaseYear: 1994,
      rating: 5
    },
    {
      id: 4,
      title: "Forrest Gump - O Contador de Histórias",
      image: "19874092.webp",
      genre: "Comédia",
      releaseYear: 1994,
      rating: 4
    },
    {
      id: 5,
      title: "O Rei Leão",
      image: "19962110.jpg-c_310_420_x-f_jpg-q_x-xxyxx.jpg",
      genre: "Aventura",
      releaseYear: 2011,
      rating: 2
    },
    {
      id: 6,
      title: "O Senhor dos Anéis - O Retorno do Rei",
      image: "20224867.jpg-c_310_420_x-f_jpg-q_x-xxyxx.jpg",
      genre: "Aventura",
      releaseYear: 2003,
      rating: 3
    }
  ]

  return (
    <Container>
      <MovieCard movies={movies}/>
    </Container>
  )
}

export default App
