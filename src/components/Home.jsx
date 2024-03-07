import { Container, Button } from 'react-bootstrap'
import '../App.css'
import NavBar from './Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <NavBar />
      <div className='home-body'>
        <Container className='d-flex flex-column h-100'>
          <h1 className='display-1 text-white mt-5'>Track your tain easyly.</h1>
          <p id='hero-text' className='text-light'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            velit, esse voluptatibus quos, illo laudantium nisi obcaecati minus
            reiciendis error veniam repellat quibusdam adipisci est veritatis.
            Illo illum numquam eius?
          </p>
          <div className='btn-section w-100 h-100 d-flex justify-content-center align-items-center'>
            <Button as={Link} to={'/track'} variant='primary'>
              Track Now
            </Button>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Home
