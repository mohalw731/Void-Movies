import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='hero'>
      <div className="row">
        <h1>NEW WAY TO WATCH <br /> MOVIES FOR FREE</h1>
        <p>Void Platform offers a wide selection of movies and shows from <br />various platforms for free, ensuring everyone can enjoy the same <br /> premium entertainment experience.</p>

        <div className="btn-wrapper">
          <button className="btn">Github</button>
          <Link to='/register'><button className="btn hero-register">Try for free</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
