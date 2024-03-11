import { Navbar, Container, Nav } from 'react-bootstrap'
import '../App.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand as={Link} to={'/'}>
            <img
              src='train.png'
              width='25'
              height='25'
              className=' nav-title d-inline-block align-center'
              alt='Train Tracker logo'
            />
            <span className='nav-title'> Train Tracker</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to={'/'} className='nav-link-custom'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/track' className='nav-link-custom'>
                Track
              </Nav.Link>
              <Nav.Link as={Link} to='/login' className='nav-link-custom'>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
