import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { Container } from 'react-bootstrap';
import { GET_PRODUCT } from '../../api';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import { useParams } from 'react-router-dom';
import ProductDetails from '../../components/ProductDetails';
import { GlobalContext } from './../../components/GlobalStorage';
import { useContext } from 'react'

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { cart, setCart } = useContext(GlobalContext);

  function handleBuy() {
    const indexProduto = cart.findIndex((element) => element.id == product.id);
    let quantity = 1;
    if (indexProduto === -1) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      const copiaCart = [...cart];
      let produtoSelecionado = cart[indexProduto];
      quantity = ++produtoSelecionado.quantity;
      copiaCart[indexProduto] = produtoSelecionado;
      setCart(copiaCart);
    }
    alert(`Produto adicionado com sucesso, quantidade total do produto: ${quantity}`);
  }

  useEffect(() => {
    const { url, options } = GET_PRODUCT(id);
    setLoading(true);
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro HTTP ${response.status}`);
        }
        setError("");
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      }).catch((e) => {
        setError(e.message);
        setProduct([]);
      }).finally(() => {
        setLoading(false);
      })
  }, [id]);

  return (
    <>
      <Header />
      <Container>
        {error && <ErrorMessage message={error} />}
        <ProductDetails {...product} onBuy={handleBuy}/>
      </Container>
      {loading && <Loading />}
    </>
  )
}

export default Product