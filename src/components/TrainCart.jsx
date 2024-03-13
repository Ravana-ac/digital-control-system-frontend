import React from 'react'
import '../App.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
export default function TrainCart(props) {
  return (
    <div>
      <Container className='py-2 '>
        <Row className=' traincart-section  align-items-center'>
          <Col xs={4} md={4}>
            <h5>{props.name}</h5>
          </Col>
          <Col xs={4} md={4}>
            <h6>{props.id}</h6>
          </Col>
          <Col xs={4} md={4}>
            <div className='d-inline-flex'>
              <Button variant='secondary' className='me-2'>
                Hide
              </Button>
              <Button variant='danger'>Delete</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
