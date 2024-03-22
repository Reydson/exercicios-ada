import { Button, Col, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import Rating from 'react-rating'
import emptySymbol from './../../assets/images/star-empty.png'
import fullSymbol from './../../assets/images/star-full.png'
import { Link } from 'react-router-dom'

const ProductDetails = ({ title, price, rating, image, description, category, onBuy }) => {
  return (
    <div className={styles.card}>
      <h1 className='mb-3'>{title}</h1>
      <Row>
        <Col lg="6">
          <img src={image} alt={title} className={styles.image} />
        </Col>
        <Col lg="6" className={styles.text}>
          <Rating
            className='my-2'
            initialRating={rating?.rate}
            readonly={true}
            emptySymbol={<img src={emptySymbol} className="icon" />}
            fullSymbol={<img src={fullSymbol} className="icon" />}
          />
          <p className={styles.shortDescription}>{description}</p>
          <p><b>Categoria:</b> {category}</p>
          <p className={styles.price}><b>Preço:</b> {price?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
          <Button variant="custom-bg" className={styles.button} onClick={onBuy}>Adicionar ao carrinho</Button>
          <Link to={-1}>
            <Button variant="custom-bg" className={styles.button}>Voltar</Button>
          </Link>
        </Col>
        </Row>
    </div>
  )
}

ProductDetails.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.object,
  image: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  onBuy: PropTypes.func,
}

export default ProductDetails