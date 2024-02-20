import { Alert } from 'react-bootstrap'
import { PropTypes } from 'prop-types';

const ErrorMessage = ( {message} ) => {
  return (
    <Alert key="danger" variant="danger">Um erro ocorreu: {message}</Alert>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string
}

export default ErrorMessage