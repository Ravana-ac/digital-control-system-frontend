import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  const login = async (email, password) => {
    const response = await axios.post('/auth/login', { email, password })
    if (!response.data.token) {
      throw new Error('Login faild')
    }
    const token = response.data.token
    const decodedToken = jwtDecode(token)

    localStorage.setItem('TOKEN', token)
    setLoggedIn(true)
    setCurrentUser(decodedToken.username)
  }

  const logout = () => {
    localStorage.removeItem('TOKEN')
    setCurrentUser(null)
    setLoggedIn(false)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setCurrentUser(token)
    }
    setLoading(false)
  }, [])

  const value = { currentUser, loggedIn, login, logout }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
