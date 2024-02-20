import styles from  './styles.module.css';
import loading from './../../assets/images/loading.svg'

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div>
        <img src={loading} alt="Loading" />
        <p>Carregando...</p>
      </div>
    </div>
  )
}

export default Loading