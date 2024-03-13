import { Button } from 'react-bootstrap'
import '../App.css'
import NavBar from './Navbar'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import { Container, Row, Col } from 'react-bootstrap'
import React, { useState } from 'react'
import { Accordion } from 'react-bootstrap'
const Home = () => {
  const [activeKey, setActiveKey] = useState('0')

  const handleSelect = (key) => setActiveKey(key)
  return (
    <>
      <div className='animated-fade-in'>
        {/* Header */}
        <NavBar />
        <div className='home-body '>
          {/* Hero section */}
          <Container fluid id='hero-section' className='text-center pb-3'>
            <h1>Track Your Train in Real-Time</h1>
            <Row>
              <Col
                xs={12}
                md={12}
                className='py-3 d-flex justify-content-center align-items-center'
              >
                <Button
                  variant='success'
                  className='btn btn-primary me-2 '
                  as={Link}
                  to={'/track'}
                >
                  Start Tracking Now
                </Button>

                <Link to='/login' className='btn btn-outline-success'>
                  Learn More
                </Link>
              </Col>
            </Row>
          </Container>
          {/* Features section */}
          <Container
            id='Features-section'
            fluid
            className='   Features-section text-center py-3'
          >
            <h1>Explore Our Featureses</h1>
            <Row xs={1} md={2} lg={12} className='      g-5        '>
              <Col>
                <div className=' Features-content   '>
                  <h3>Real-time Train Tracking</h3>
                  <p>
                    Track your train in real-time and know exactly where it is
                    on the map.
                  </p>
                </div>
              </Col>
              <Col>
                <div className=' Features-content   '>
                  <h3>Live Departure and Arrival Updates</h3>
                  <p>
                    Receive live updates on departure and arrival times to plan
                    your journey effectively.
                  </p>
                </div>
              </Col>
              <Col>
                <div className=' Features-content   '>
                  <h3>Detailed Train Information</h3>
                  <p>
                    Access detailed information about the train, including its
                    route, stops, and delays.
                  </p>
                </div>
              </Col>
              <Col>
                <div className=' Features-content   '>
                  <h3>Personalized Alerts</h3>
                  <p>
                    Set up personalized alerts for your favorite trains to stay
                    informed about any changes.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          {/* Team member section */}
          <div id='member-section' className=' row '>
            <center>
              <h1 className='header-title'>Team Members</h1>
            </center>
            <Carousel interval={5000} indicators={false} className='mt-5'>
              <Carousel.Item>
                <div className='d-flex flex-wrap justify-content-around'>
                  {/* dulitha */}
                  <Card
                    className='my-3'
                    style={{
                      width: '23rem',
                      paddingBottom: '25px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <Card.Img
                      variant='top'
                      src='dulitha.jpg'
                      style={{ height: '28rem', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <Card.Title
                        className='text-center'
                        style={{
                          marginTop: '15px',
                        }}
                      >
                        Thilakarathna G S D P
                      </Card.Title>
                      <Card.Text
                        className='text-center'
                        style={{
                          marginTop: '15px',
                        }}
                      >
                        Index: ICT/21/931
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  {/* sanjula */}
                  <Card
                    className='my-3'
                    style={{
                      width: '23rem',
                      paddingBottom: '25px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <Card.Img
                      variant='top'
                      src='sanjula.jpg'
                      style={{ height: '28rem', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <Card.Title
                        className='text-center'
                        style={{
                          marginTop: '15px',
                        }}
                      >
                        Dasanayaka L K K S
                      </Card.Title>
                      <Card.Text
                        className='text-center'
                        style={{
                          marginTop: '15px',
                        }}
                      >
                        Index: ICT/21/953
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='d-flex flex-wrap justify-content-around'>
                  {/* nipuna */}
                  <Card
                    className='my-3'
                    style={{
                      width: '23rem',
                      paddingBottom: '25px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <Card.Img
                      variant='top'
                      src='nipuna.jpg'
                      style={{ height: '28rem', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <Card.Title
                        className='text-center'
                        style={{
                          marginTop: '15px',
                        }}
                      >
                        Pemarathna A V N J
                      </Card.Title>
                      <Card.Text
                        className='text-center'
                        style={{
                          marginTop: '15px',
                        }}
                      >
                        Index: ICT/21/896
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  {/* lasantha */}
                  <Card
                    className='my-3'
                    style={{
                      width: '23rem',
                      paddingBottom: '25px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <Card.Img
                      variant='top'
                      src='lasantha.jpg'
                      style={{ height: '28rem', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <Card.Title
                        className='text-center'
                        style={{
                          marginTop: '15px',
                        }}
                      >
                        Karunarathna E G D L D
                      </Card.Title>
                      <Card.Text
                        className='text-center'
                        style={{
                          marginTop: '15px',
                        }}
                      >
                        Index: ICT/21/866
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='d-flex flex-wrap justify-content-around'>
                  {/* hasith */}
                  <Card
                    className='my-3'
                    style={{
                      width: '23rem',
                      paddingBottom: '25px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <Card.Img
                      variant='top'
                      src='hasith.jpg'
                      style={{ height: '28rem', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <Card.Title
                        className='text-center'
                        style={{
                          marginTop: '15px',
                        }}
                      >
                        Walimuni W D H D
                      </Card.Title>
                      <Card.Text
                        className='text-center'
                        style={{
                          marginTop: '15px',
                        }}
                      >
                        Index: ICT/21/938
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  {/* sandalu */}
                  <Card
                    className='my-3'
                    style={{
                      width: '23rem',
                      paddingBottom: '25px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <Card.Img
                      variant='top'
                      src='sandalu.jpg'
                      style={{ height: '28rem', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <Card.Title
                        className='text-center'
                        style={{
                          marginTop: '15px',
                        }}
                      >
                        Ekanayaka L P E S T
                      </Card.Title>
                      <Card.Text
                        className='text-center'
                        style={{
                          marginTop: '15px',
                        }}
                      >
                        Index: ICT/21/837
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          {/* FAQ section */}
          <div className='faq-section'>
            <Container className=' FAQ-section py-3'>
              <h1>FAQ</h1>
              <h3>Here are some of the most common questions that we get.</h3>
              <Accordion defaultActiveKey='0'>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>How can I track my train?</Accordion.Header>
                  <Accordion.Body className='accordion-body '>
                    You can track your train by entering the train number or
                    name in the search bar on our website.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>
                    Is the train tracking information real-time?
                  </Accordion.Header>
                  <Accordion.Body className='accordion-body '>
                    Yes, the train tracking information provided on our website
                    is real-time and constantly updated.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                  <Accordion.Header>
                    Can I track multiple trains at the same time?
                  </Accordion.Header>
                  <Accordion.Body className='accordion-body '>
                    Yes, you can track multiple trains simultaneously by using
                    our multi-train tracking feature.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                  <Accordion.Header>
                    What should I do if I encounter an issue with train
                    tracking?
                  </Accordion.Header>
                  <Accordion.Body>
                    If you encounter any issues with train tracking, please
                    contact our customer support for assistance.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                  <Accordion.Header>
                    Is the train tracking service available 24/7?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, our train tracking service is available 24/7 for your
                    convenience.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Container>
          </div>

          {/*footer section  */}

          <footer className='footer bg-dark  mt-auto py-3 text-light '>
            <Container>
              <Row>
                <Col
                  className=' footer-section text-center text-md-left'
                  md={6}
                >
                  <h5>About Us</h5>
                  <p>
                    Our mission is to revolutionize train travel with real-time
                    tracking and comprehensive travel information.
                  </p>
                </Col>
                <Col
                  className='footer-section text-center text-md-right'
                  md={6}
                >
                  <h5>Contact Us</h5>
                  <ul className='list-unstyled'>
                    <li>Email: Ravanadev@gmail.com</li>
                    <li>Phone: +94711595173</li>
                    <li>Sarasavi Madura,Pitipana,Homagama</li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col className='text-center' md={12}>
                  © 2024 TrainTracker. All rights reserved.
                </Col>
              </Row>
            </Container>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Home
