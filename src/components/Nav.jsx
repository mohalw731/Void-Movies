import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import Login from '../pages/Login'
import useUserDeatils from '../Hooks/useUserDeatils'
import useLogout from '../Hooks/useLogout'

function Nav({ none }) {

  const { isLoggedIn, userDetails } = useUserDeatils()
  const [showMenu, setShowMenu] = useState(false)
  const {handleSignOut} = useLogout()
  const bageLetter = userDetails?.name.toUpperCase().substring(0, 1)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav>
      <div className="row nav">

      {
          isLoggedIn ? '' : <Link className={`${none}`}>About</Link>
        }

        <div className={isLoggedIn ? '' : 'logo'}>
          <Link to='/'>
            <img src={logo} alt="void-plus-logo" />
          </Link>
        </div>

        {
          isLoggedIn ? (
            <div className="loggedin-nav">

              <div className="nav-row">
                <Link>Search</Link>

                <span className="bage" onClick={toggleMenu}>
                  {bageLetter}
                </span>
              </div>

              {
                showMenu ? (
                  <div className="menu">
                    <ul>
                      <li>My List</li>
                      <li><Link to='/profile'>Profile</Link></li>
                      <li onClick={handleSignOut}>Sign out</li>
                    </ul>
                  </div>
                ) : ''
              }
            </div>
          ) :

            <Link to='/login'>
              <button className={`btn ${none}`}>Login</button>
            </Link>

        }

      </div>
      <div className="blue-shadow" />
    </nav>
  )
}

export default Nav
