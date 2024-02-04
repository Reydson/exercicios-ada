import PropTypes from "prop-types";
import Rating from './../Rating';
import { Col } from 'react-bootstrap';
import styles from './MovieCard.module.css';

const MovieCard = ({ title, image, genre, releaseYear, rating }) => {
  return (
    <Col md="6" lg="4" xxl="2" className="my-3">
      <img src={"/" + image} alt={title} className="w-100"/>
      <h2 className={styles.title}>{title} ({releaseYear})</h2>
      <div className="d-flex justify-content-between">
        <span className="d-block">{genre}</span>
        <Rating rating={rating}/>
      </div>
    </Col>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  genre: PropTypes.string,
  releaseYear: PropTypes.number,
  rating: PropTypes.number,
};

export default MovieCard;
