import { Col, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'
import styles from './styles.module.css'


const CartItem = ( {title, price, quantity, image} ) => {
  return (
    <Col lg="6" className='mb-4'>
      <Row>
        <Col sm="3">
          <img src={image} alt={title} className={styles.image} />
        </Col>
        <Col sm="9">
          <span><b>{title}</b></span><br/>
          <span><b>Preço unitário:</b> {price?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span><br/>
          <span><b>Quantidade:</b> {quantity}</span><br/>
          <span><b>Subtotal:</b> {(quantity*price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
        </Col>
      </Row>
    </Col>
  )
}

CartItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  rating: PropTypes.object,
  image: PropTypes.string,
  category: PropTypes.string,
}

export default CartItem