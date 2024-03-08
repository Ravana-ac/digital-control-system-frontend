import { Button } from 'react-bootstrap'
import '../App.css'
import NavBar from './Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='animated-fade-in'>
        <NavBar />
        <div className='home-body '>
          <div className='container-fluid text-dark p-5'>
            <div className='row'>
              <div className='col-md-6 '>
                <h1 className='header-title'>
                  Track Your Train in Real-Time, Anytime
                </h1>
                <p className='header-content'>
                  Welcome to the future of train travel! Our cutting-edge train
                  location tracking system empowers you to track trains in
                  real-time, ensuring you have the most accurate and up-to-date
                  information at all times. Say goodbye to uncertainty and hello
                  to seamless travel with our easy-to-use web app.
                </p>
                <center>
                  <Button
                    className='track-bttn'
                    variant='success'
                    as={Link}
                    to={'/track'}
                    size='lg'
                  >
                    Track Now
                  </Button>
                </center>

                <h1 className='mission-title'>Our Mission</h1>

                <p className='mission-content'>
                  "Our mission is to revolutionize the way people experience
                  train travel by providing real-time, accurate, and accessible
                  train location and schedule information. We aim to empower
                  travelers with the tools they need to make informed decisions,
                  minimize waiting times, and optimize their travel plans.
                  Through innovative technology and user-friendly design, we
                  strive to enhance the efficiency, reliability, and convenience
                  of public transportation, making it a preferred choice for
                  commuters and travelers alike. By bridging the gap between
                  passengers and the railways with our cutting-edge tracking
                  system, we are committed to improving travel experiences,
                  promoting punctuality, and supporting sustainable
                  transportation solutions."
                </p>
              </div>
              <div className='col-md-6 '>
                <img className='img-fluid' src='main.jpg' alt='Skyscraper' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
