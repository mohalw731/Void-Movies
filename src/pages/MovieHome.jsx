import React from 'react'
import useLogout from '../Hooks/useLogout'
import Loader from '../components/Loader'
import Nav from '../components/Nav'
import useUserDeatils from '../Hooks/useUserDeatils'

function MovieHome() {
  const { userDetails, isLoggedIn,noUserData } = useUserDeatils()

  console.log(userDetails)

  return (
    <div className='row'>
      {
        noUserData ? (
         <Loader/>
        ) :  <div className="movie-home">
        <Nav />
      </div>
      }
    </div>
  )
}

export default MovieHome
