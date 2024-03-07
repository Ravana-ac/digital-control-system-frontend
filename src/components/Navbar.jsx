import { Navbar, Container, Nav } from 'react-bootstrap'
import '../App.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar bg='primary' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand as={Link} to={'/'}>
          Home
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link as={Link} to='/track'>
            Track
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar
