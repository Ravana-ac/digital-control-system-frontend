import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const login = async (email, password) => {
    const response = await axios.post('/auth/login', { email, password })
    console.log(response)
    const token = response.data.token
    localStorage.setItem('token', token)
    // Here, you should decode the JWT and set the user details
    // For simplicity, we'll just set the token as the current user
    setCurrentUser(token)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setCurrentUser(null)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setCurrentUser(token)
    }
    setLoading(false)
  }, [])

  const value = { currentUser, login, logout }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
