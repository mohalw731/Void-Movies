import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import Login from '../pages/Login'

function Nav({ none }) {
  return (
    <nav>
      <div className="row nav">
        <a href="" className={`${none}`}>About</a>

        <div className="logo">
          <Link to='/'>
            <img src={logo} alt="void-plus-logo" />
          </Link>
        </div>
        <Link to='/login'>
          <button className={`btn ${none}`}>Login</button>
        </Link>
      </div>

      <div className="blue-shadow" />
    </nav>
  )
}

export default Nav
