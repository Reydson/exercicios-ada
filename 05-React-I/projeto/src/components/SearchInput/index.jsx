import { Button, Form, InputGroup } from 'react-bootstrap'
import { FaSearch } from "react-icons/fa";
import styles from './styles.module.css';
import { PropTypes } from 'prop-types';
import { useState } from 'react';

const SearchInput = ( {onSearch} ) => {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchTerm);
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control placeholder="Buscar" value={searchTerm} onChange={({ target }) => setSearchTerm(target.value)} />
        <Button variant="custom-bg" type='submit'>
          <FaSearch className={styles.icon} />
        </Button>
      </InputGroup>
    </form>
  )
}

SearchInput.propTypes = {
  onSearch: PropTypes.func
}

export default SearchInput