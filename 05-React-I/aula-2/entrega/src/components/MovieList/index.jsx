import PropTypes from "prop-types";
import { Row } from 'react-bootstrap';
import MovieCard from './../MovieCard';

const MovieList = ({ movies }) => {
  return (
    <>
      <h1 className="mt-3">Filmes</h1>
      <Row as="section">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </Row>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
