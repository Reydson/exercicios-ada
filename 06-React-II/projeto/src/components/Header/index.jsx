import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './styles.module.css';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../GlobalStorage';
import logo from './../../assets/images/logo.png';

const Header = () => {
  const { user } = useContext(GlobalContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/" className="navbar-brand">
          <img className={styles.imgLogo} src={logo} alt="Clothing Store" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">
            <NavLink to={'/'} className="nav-link">Home</NavLink>

            <NavLink to={'/shopping-cart'} className="nav-link">Carrinho</NavLink>

            {user ?
              <NavDropdown title={user.name} id="basic-nav-dropdown">
                <NavLink to={'/logout'} className="dropdown-item">Sair</NavLink>
              </NavDropdown>
              : <NavLink to={'/login'} className="nav-link">Entrar</NavLink>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header