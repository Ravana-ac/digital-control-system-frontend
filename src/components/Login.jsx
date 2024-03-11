import React from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Login() {
  return (
    <>
      <Container
        className='d-flex align-items-center justify-content-center'
        style={{ minHeight: '100vh' }}
      >
        <div className='w-100' style={{ maxWidth: '400px' }}>
          <Card className='login-box stylish-shadow animated-fade-in'>
            <Card.Body>
              <h2 className='text-center mb-4 custom-heading'>Log In</h2>
              <Form>
                <Form.Group id='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' required />
                </Form.Group>
                <Form.Group id='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' required />
                </Form.Group>

                <Button className='w-100 mt-4 custom-btn' type='submit'>
                  Log In
                </Button>
              </Form>
              <div className='w-100 text-center mt-3'>
                <Link className='custom-link'>Forgot Password?</Link>
              </div>
              <div className='w-100 text-center mt-2'>
                Need an account?{' '}
                <Link className='custom-link' to='/signup'>
                  Sign Up
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  )
}
