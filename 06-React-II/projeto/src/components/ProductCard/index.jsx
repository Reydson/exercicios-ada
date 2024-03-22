import { Button, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import Rating from 'react-rating'
import { Link } from 'react-router-dom';
import emptySymbol from './../../assets/images/star-empty.png'
import fullSymbol from './../../assets/images/star-full.png'


const ProductCard = ( {id, title, price, rating, image, category} ) => {
  return (
    <Col sm="12" md="6" lg="4">
      <div className={styles.card}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.text}>
          <h2>{title}</h2>
          <Rating
            className='mb-2'
            initialRating={rating.rate}
            readonly={true}
            emptySymbol={<img src={emptySymbol} className="icon" />}
            fullSymbol={<img src={fullSymbol} className="icon" />}
          />
          <p className={styles.price}><b>Preço:</b> {price?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
          <p><b>Categoria:</b> {category}</p>
          <Link to={`/product/${id}`}>
            <Button variant="custom-bg" className={styles.button}>Ver detalhes</Button>
          </Link>
        </div>
      </div>
    </Col>
  )
}

ProductCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.object,
  image: PropTypes.string,
  category: PropTypes.string,
}

export default ProductCard