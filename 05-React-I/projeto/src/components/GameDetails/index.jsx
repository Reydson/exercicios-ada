import { Col, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import Rating from 'react-rating'
import emptySymbol from './../../assets/images/star-empty.png'
import fullSymbol from './../../assets/images/star-full.png'
import Review from '../Review'


const GameDetails = ({ title, reviews, thumbnail, short_description, genre, platform, release_date }) => {
  let rating = 0;
  if (reviews && reviews.length > 0) {
    const ratings = reviews.map((review) => review.rating);
    rating = ratings.reduce((a, b) => a + b, 0) / reviews.length;
  }
  return (
    <div className={styles.card}>
      <h1 className='mb-3'>{title}</h1>
      <Row>
        <Col lg="6">
          <img src={thumbnail} alt={title} className={styles.image} />
        </Col>
        <Col lg="6" className={styles.text}>
          <Rating
            className='my-2'
            initialRating={rating}
            readonly={true}
            emptySymbol={<img src={emptySymbol} className="icon" />}
            fullSymbol={<img src={fullSymbol} className="icon" />}
          />
          <p className={styles.shortDescription}>{short_description}</p>
          <p><b>Gênero:</b> {genre}</p>
          <p><b>Plataforma:</b> {platform}</p>
          <p><b>Data de lançamento:</b> {new Date(release_date).toLocaleDateString()}</p>
        </Col>
        </Row>
        <h2 className='mt-4'>Reviews:</h2>
        <Row>
        {reviews && reviews.map(review => <Col lg="6" key={review.id}><Review {...review} /></Col>)}
      </Row>
    </div>
  )
}

GameDetails.propTypes = {
  title: PropTypes.string,
  reviews: PropTypes.array,
  thumbnail: PropTypes.string,
  short_description: PropTypes.string,
  game_url: PropTypes.string,
  genre: PropTypes.string,
  platform: PropTypes.string,
  release_date: PropTypes.string
}

export default GameDetails