import { Navbar, Container, Nav } from 'react-bootstrap'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const NavBar = () => {
  const { loggedIn } = useAuth()
  const { logout } = useAuth()

  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const loginButton = () => {
    if (loggedIn) {
      return (
        <>
          <Nav.Link as={Link} to='/dashboard' className='nav-link-custom'>
            Dashboard
          </Nav.Link>
          <Nav.Link onClick={handleLogout} className='nav-link-custom'>
            Logout
          </Nav.Link>
        </>
      )
    } else {
      return (
        <Nav.Link as={Link} to='/login' className='nav-link-custom'>
          Login
        </Nav.Link>
      )
    }
  }

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
              {loginButton()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
