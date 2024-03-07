import { Button } from 'react-bootstrap'
import '../App.css'
import { Link } from 'react-router-dom'

const TrainCard = ({ id, name, route }) => {
  return (
    <div className='train-card mt-3' key={id}>
      <div style={{ width: '300px' }}>
        <h3 className='text-light'>{name}</h3>
      </div>
      <h5>Route: {route}</h5>
      <Button as={Link} to='/train' variant='success'>
        View
      </Button>
    </div>
  )
}

export default TrainCard
