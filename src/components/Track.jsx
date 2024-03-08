import { Container, Row, Col } from 'react-bootstrap'
import '../App.css'
import NavBar from './Navbar'
import TrainCard from './TrainCard'

const Track = () => {
  return (
    <>
      <div className='animated-fade-in'>
        <NavBar />
        <div className='home-body'>
          <Container className='d-flex flex-column h-100 text-center'>
            <h1 className='text text-dark mt-5  mb-5'>Available Trains</h1>
            <Row>
              <Col md={6} lg={4} className='mb-4'>
                <TrainCard
                  id={1}
                  name={'Rajarata Rajina'}
                  route={8086}
                  image={'rajarata rajina.jpg'}
                />
              </Col>
              <Col md={6} lg={4} className='mb-4'>
                <TrainCard
                  id={2}
                  name={'Yal Devi'}
                  route={4077}
                  image={'yal devi.jpg'}
                />
              </Col>
              <Col md={6} lg={4} className='mb-4'>
                <TrainCard
                  id={3}
                  name={'Ruhunu Kumari'}
                  route={8059}
                  image={'ruhunu kumari.jpg'}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Track
