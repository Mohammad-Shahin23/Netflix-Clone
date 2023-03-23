import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { Link} from 'react-router-dom';

function NavBar() {
  return (
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Netflix-Clone</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="Coustom-Nav-Link" to="/">Home</Link>
            <Link className="Coustom-Nav-Link" to="/FavList">Favorite-List</Link>
            
          </Nav>
        </Container>
      </Navbar>
   
  ) 
}

export default NavBar;