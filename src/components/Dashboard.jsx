import React from 'react'
import '../App.css'
import NavBar from './Navbar'
import { Col, Container, Row } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import TrainCart from './TrainCart'
export default function Dashboard() {
  return (
    <div className='dashboard animated-fade-in'>
      <NavBar />
      <Container fluid className='dashboard-container text-center '>
        <h1>Dashboard</h1>
        <Container className='dashboard-tabs'>
          <Tabs
            defaultActiveKey='Add Train'
            id='uncontrolled-tab-example'
            className='  mb-3'
          >
            <Tab eventKey='Add Train' title='Add Train'>
              <Container className='beautiful-border d-flex justify-content-center align-items-center py-5'>
                <Form className='w-50 form-section'>
                  <Form.Group>
                    <Row className='py-3'>
                      <Col>
                        <Form.Label>
                          <h5>Train ID :</h5>
                        </Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          type='textbox'
                          placeholder='Enter Train ID'
                        />
                      </Col>
                    </Row>
                    <Row className='py-3'>
                      <Col>
                        <Form.Label>
                          <h5>Train Name :</h5>
                        </Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          type='textbox'
                          placeholder='Enter Train Name'
                        />
                      </Col>
                    </Row>
                    <Row className='py-3'>
                      <Col>
                        <Form.Label>
                          <h5>Add Train Image :</h5>
                        </Form.Label>
                      </Col>
                      <Col>
                        <Form.Control type='file' required name='file' />
                      </Col>
                    </Row>
                  </Form.Group>
                  <Row className='py-3 justify-content-center'>
                    <Button
                      variant='success'
                      type='submit'
                      style={{ width: '100px', textAlign: 'center' }}
                    >
                      Submit
                    </Button>
                  </Row>
                </Form>
              </Container>
            </Tab>
            <Tab eventKey='All Train' title='All Train'>
              <TrainCart name='Rajarata Rajina' id='8086'></TrainCart>
              <TrainCart name='Yal Devi' id='4077'></TrainCart>
              <TrainCart name='Ruhunu Kumari ' id='8059'></TrainCart>
            </Tab>
          </Tabs>
        </Container>
      </Container>
    </div>
  )
}
