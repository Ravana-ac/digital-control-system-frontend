import { Container } from 'react-bootstrap'
import '../App.css'
import NavBar from './Navbar'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Train = () => {
  const center = [8.059958, 80.273583]
  return (
    <>
      <NavBar />
      <div className='home-body'>
        <Container className='h-100 d-flex justify-content-center align-items-center'>
          <MapContainer
            center={center}
            zoom={15}
            style={{ height: '600px', width: '800px', borderRadius: '20px' }}
          >
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={center}>
              <Popup>Your train is hear</Popup>
            </Marker>
          </MapContainer>
        </Container>
      </div>
    </>
  )
}

export default Train
