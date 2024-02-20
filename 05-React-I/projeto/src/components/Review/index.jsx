import PropTypes from 'prop-types'
import styles from './styles.module.css'
import Rating from 'react-rating'
import emptySymbol from './../../assets/images/star-empty.png'
import fullSymbol from './../../assets/images/star-full.png'
import { useEffect, useState } from 'react'
import { GET_USER } from '../../api'


const Review = ({ userId, rating, date, review }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { url, options } = GET_USER(userId);
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro HTTP ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
      }).catch(() => {
        setUser(null);
      })
  }, [userId]);
  
  return (
    <div className={styles.card}>
      <div className="d-flex">
        <div>
          <img src={user?.image} alt={user?.name} className={styles.image} />
          <h3 className='text-center'>{user?.name}</h3>
        </div>
        <div className={styles.text}>
          <Rating
            className='mb-2'
            initialRating={rating}
            readonly={true}
            emptySymbol={<img src={emptySymbol} className="icon" />}
            fullSymbol={<img src={fullSymbol} className="icon" />}
          />
          <p><b>Data:</b> {new Date(date).toLocaleDateString()}</p>
          <p>{review}</p>
        </div>
      </div>
    </div>
  )
}

Review.propTypes = {
  id: PropTypes.number,
  userId: PropTypes.number,
  rating: PropTypes.number,
  date: PropTypes.number,
  review: PropTypes.string,
}

export default Review