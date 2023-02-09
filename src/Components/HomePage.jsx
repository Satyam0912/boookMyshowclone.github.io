import React from 'react';
import CauroselComponent from './CauroselComponent';
import RecommendedMovies from './RecommendedMovies';
import longImg from '../assests/StreamLongImg1.jpg'
import Bestliveevent from './Bestliveevent';
import Premiere from './Premiere';
function HomePage() {
  return (
    <div className='container-fluid'>
      <CauroselComponent />
      <RecommendedMovies />
      <img style={{ width: '80vw', margin: '5vw' }} src={longImg} alt="StreamLongImg1.jpg" />
      <Bestliveevent />
      <Premiere />
    </div>
  )
}

export default HomePage;