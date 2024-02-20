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
  const { user, genres } = useContext(GlobalContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          <img className={styles.imgLogo} src={logo} alt="Best Browser Games" />
          Best Browser Games
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">
            <NavLink to={'/'} className="nav-link">Home</NavLink>

            <NavDropdown title="Gêneros" id="basic-nav-dropdown">
              <Link to={"/"} className="dropdown-item">Todos</Link>
              {genres.map((genre) => (
                <Link to={"/"} state={{ genre }} key={genre} className="dropdown-item">{genre}</Link>
              ))}
            </NavDropdown>

            {user ?
              <NavDropdown title={user.name} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Gerenciar jogos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Atualizar dados</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Trocar senha</NavDropdown.Item>
                <NavDropdown.Divider />
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