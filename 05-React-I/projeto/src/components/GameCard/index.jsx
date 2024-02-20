import { Button, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import Rating from 'react-rating'
import { Link } from 'react-router-dom';
import emptySymbol from './../../assets/images/star-empty.png'
import fullSymbol from './../../assets/images/star-full.png'


const GameCard = ( {id, title, reviews, thumbnail, short_description, genre, platform, release_date} ) => {
  let rating = 0;
  if(reviews && reviews.length > 0) {
    const ratings = reviews.map((review) => review.rating);
    rating = ratings.reduce((a, b) => a + b, 0)/reviews.length;
  }
  return (
    <Col sm="12" md="6" lg="4">
      <div className={styles.card}>
        <img src={thumbnail} alt={title} className={styles.image} />
        <div className={styles.text}>
          <h2>{title}</h2>
          <Rating
            className='mb-2'
            initialRating={rating}
            readonly={true}
            emptySymbol={<img src={emptySymbol} className="icon" />}
            fullSymbol={<img src={fullSymbol} className="icon" />}
          />
          <p className={styles.shortDescription}>{short_description}</p>
          <p><b>Gênero:</b> {genre}</p>
          <p><b>Plataforma:</b> {platform}</p>
          <p><b>Data de lançamento:</b> {new Date(release_date).toLocaleDateString()}</p>
          <Link to={`/game/${id}`}>
            <Button variant="custom-bg" className={styles.button}>Ver detalhes</Button>
          </Link>
        </div>
      </div>
    </Col>
  )
}

GameCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  reviews: PropTypes.array,
  thumbnail: PropTypes.string,
  short_description: PropTypes.string,
  game_url: PropTypes.string,
  genre: PropTypes.string,
  platform: PropTypes.string,
  release_date: PropTypes.string
}

export default GameCard