import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Track from './components/Track'
import Train from './components/Train'
import Singup from './components/Singup'
import Login from './components/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/track' element={<Track />} />
        <Route path='/train' element={<Train />} />
        <Route path='/signup' element={<Singup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
