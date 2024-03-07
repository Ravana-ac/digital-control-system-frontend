import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Track from './components/Track'
import Train from './components/Train'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/track' element={<Track />} />
        <Route path='/train' element={<Train />} />
      </Routes>
    </Router>
  )
}

export default App
