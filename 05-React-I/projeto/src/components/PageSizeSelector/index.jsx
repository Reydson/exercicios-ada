import { Form } from 'react-bootstrap';
import styles from './styles.module.css';

const PageSizeSelector = (props) => {
  return (
    <Form.Label className={styles.label}>Quantidade:
      <Form.Select className={styles.select} {...props}>
        <option value="12">12</option>
        <option value="36">36</option>
        <option value="96">96</option>
        <option value="-1">Tudo</option>
      </Form.Select>
    </Form.Label>
  )
}

export default PageSizeSelector