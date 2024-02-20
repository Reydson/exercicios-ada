import { Form } from 'react-bootstrap';
import styles from './styles.module.css';
import PropTypes from 'prop-types'
import { useContext } from 'react';
import { GlobalContext } from '../GlobalStorage';

const GenreSelector = ( {genre, setGenre } ) => {
  const { genres } = useContext(GlobalContext);

  return (
    <Form.Label className={styles.label}>Gêneros:
      <Form.Select className={styles.select} value={genre} onChange={e => setGenre( e.target.value )}>
        <option value="">Todos</option>
        {genres && genres.map((genre) => <option value={genre} key={genre}>{genre}</option>)}
      </Form.Select>
    </Form.Label>
  )
}

GenreSelector.propTypes = {
  genre: PropTypes.string,
  setGenre: PropTypes.func
}

export default GenreSelector