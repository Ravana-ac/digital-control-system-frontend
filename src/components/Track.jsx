import { Container, Row, Col } from 'react-bootstrap'
import '../App.css'
import NavBar from './Navbar'
import TrainCard from './TrainCard'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
const Track = () => {
  return (
    <>
      <div className='animated-fade-in'>
        <NavBar />
        <div className='home-body'>
          <Container className='d-flex flex-column h-100 text-center'>
            <h1 className='text text-dark mt-5  mb-5'>Available Trains</h1>
            <InputGroup id='custom-form-control' className='mb-3 '>
              <Form.Control placeholder='Search' />
            </InputGroup>

            <Row className='w-1000 d-flex justify-content-between '>
              <Col
                md={6}
                lg={4}
                className='mb-4 d-flex justify-content-center '
              >
                <TrainCard
                  id={1}
                  name={'Rajarata Rajina'}
                  route={8086}
                  image={'rajarata rajina.jpg'}
                />
              </Col>
              <Col
                md={6}
                lg={4}
                className='mb-4 d-flex justify-content-center '
              >
                <TrainCard
                  id={2}
                  name={'Yal Devi'}
                  route={4077}
                  image={'yal devi.jpg'}
                />
              </Col>
              <Col
                md={6}
                lg={4}
                className='mb-4 d-flex justify-content-center '
              >
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
