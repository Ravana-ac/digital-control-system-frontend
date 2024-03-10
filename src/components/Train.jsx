import { Container } from 'react-bootstrap'
import '../App.css'
import NavBar from './Navbar'

import { io } from 'socket.io-client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react'

const socket = io.connect('http://149.28.148.239:5000/', {
  path: '/socket.io',
})

const Train = () => {
  const [center, setCenter] = useState([8.06012, 80.273583])

  useEffect(() => {
    const sendLocationRequest = () => {
      socket.emit('location-request', { id: '10' })
    }
    setInterval(sendLocationRequest, 5000)

    socket.on('receve-message', (msg) => {
      if (msg) {
        console.log(msg)
        const position = [msg.lat, msg.lon]
        setCenter(position)
      }
    })
  }, [socket, center])

  return (
    <>
      <div className='animated-fade-in'>
        <NavBar />
        <div className='home-body'>
          <Container className='h-100 d-flex justify-content-center align-items-center mt-5 mb-5'>
            <MapContainer
              center={center}
              zoom={15}
              style={{
                height: '600px',
                width: '800px',
              }}
            >
              <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
              <Marker position={center}>
                <Popup>Your train is hear</Popup>
              </Marker>
            </MapContainer>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Train
