import React, { useRef } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'
import { useAuth } from '../contexts/AuthContext'
import { ToastContainer, toast } from 'react-toastify'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value

    if (email === '' || password === '') {
      toast.error('Enter valid Email or Password')
      return
    }

    e.preventDefault()
    try {
      await login(email, password)
      toast.success('Login success')
      navigate('/dashboard')
    } catch (error) {
      toast.error('Login Faild')
      console.error('Failed to login', error)
    }
  }

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
                  <Form.Control type='email' ref={emailRef} required />
                </Form.Group>
                <Form.Group id='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' ref={passwordRef} required />
                </Form.Group>

                <Button
                  className='w-100 mt-4 custom-btn'
                  type='submit'
                  onClick={handleLogin}
                >
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
        <ToastContainer />
      </Container>
    </>
  )
}
