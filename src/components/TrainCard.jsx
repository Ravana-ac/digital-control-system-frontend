import { Button } from 'react-bootstrap'
import '../App.css'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const TrainCard = ({ id, name, route, image }) => {
  return (
    <Card
      className='mt-3'
      style={{
        width: '20rem',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        objectFit: 'cover',
      }}
      key={id}
    >
      <Card.Img
        variant='top'
        src={image}
        style={{
          width: '20rem',
          height: '15rem',
          objectFit: 'cover',
        }}
      />
      <Card.Body>
        <center>
          <Card.Title className='text-dark'>{name}</Card.Title>
          <Card.Text>Route: {route}</Card.Text>
          <Button as={Link} to='/train' variant='success'>
            View
          </Button>
        </center>
      </Card.Body>
    </Card>
  )
}

export default TrainCard
