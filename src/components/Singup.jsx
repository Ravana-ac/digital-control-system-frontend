import React from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Signup() {
  return (
    <>
      <Container
        className='d-flex align-items-center justify-content-center'
        style={{ minHeight: '100vh' }}
      >
        <div className='w-100' style={{ maxWidth: '400px' }}>
          <Card className='sign-box stylish-shadow animated-fade-in'>
            <Card.Body>
              <h2 className='text-center mb-4 custom-heading'>Sign Up</h2>
              <Form>
                <Form.Group id='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' required />
                </Form.Group>
                <Form.Group id='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' required />
                </Form.Group>
                <Form.Group id='password-confirm'>
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control type='password' required />
                </Form.Group>
                <Button className='w-100 custom-btn mt-4' type='submit'>
                  Sign Up
                </Button>
              </Form>
              <div className='w-100 text-center mt-2'>
                Already have an account?{' '}
                <Link to='/login' className='custom-link'>
                  Log In
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  )
}
