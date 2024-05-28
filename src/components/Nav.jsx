import React from 'react'
import logo from '../assets/logo.png'

function Nav() {
  return (
    <nav>
     <div className="row nav">
        <a href="">About</a>

        <img src={logo} alt="void-plus-logo" />
        
        <button className='btn login'>Login</button>
        </div> 

        <div className="blue-shadow"/>
    </nav>
  )
}

export default Nav
