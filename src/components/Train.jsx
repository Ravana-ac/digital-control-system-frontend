import { Container } from 'react-bootstrap'
import '../App.css'
import NavBar from './Navbar'

const Train = () => {
  return (
    <>
      <NavBar />
      <div className='home-body'>
        <Container className='d-flex flex-column h-100'>map</Container>
      </div>
    </>
  )
}

export default Train
