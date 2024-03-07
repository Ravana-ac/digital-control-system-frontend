import { Container } from 'react-bootstrap'
import '../App.css'
import NavBar from './Navbar'
import TrainCard from './TrainCard'

const Track = () => {
  return (
    <>
      <NavBar />
      <div className='home-body'>
        <Container className='d-flex flex-column h-100'>
          <h1 className='display-1 text-white mt-5'>Available Trains</h1>
          <TrainCard id={1} name={'Rajarata Rajina'} route={200} />
          <TrainCard id={2} name={'Yal Devi'} route={250} />
        </Container>
      </div>
    </>
  )
}

export default Track
