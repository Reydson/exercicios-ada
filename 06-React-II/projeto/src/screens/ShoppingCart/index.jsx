import Header from '../../components/Header'
import { Button, Container, Row } from 'react-bootstrap';
import CartItem from '../../components/CartItem';
import { GlobalContext } from './../../components/GlobalStorage';
import { useContext } from 'react'


const ShoppingCart = () => {
  const { user, cart, setCart } = useContext(GlobalContext);

  const total = cart.reduce((prev, curr) => prev + curr.quantity * curr.price, 0);
  const totalFormatado = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

  function handleClick() {
    if(!user) {
      alert('Por favor faça login antes de prosseguir.');
      return;
    }
    if(total == 0) {
      alert('Por favor adicione algo ao carrinho antes de prosseguir.');
      return;
    }
    alert(`Obrigado pela compra, o total foi de ${totalFormatado}`)
    setCart([]);
  }

  return (
    <>
      <Header />
      <Container>
        <Row>
          {cart.map(cartItem => <CartItem key={cartItem.id} {...cartItem}/>)}
        </Row>
        <p><b>Total do carrinho:</b> {totalFormatado}</p>
        <Button variant="custom-bg" onClick={handleClick}>Finalizar compra</Button>
      </Container>
    </>
  )
}

export default ShoppingCart