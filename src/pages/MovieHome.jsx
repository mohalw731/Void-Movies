import React from 'react'
import useLogout from '../Hooks/useLogout'
import Loader from '../components/Loader'
import Nav from '../components/Nav'
import useUserDeatils from '../Hooks/useUserDeatils'

function MovieHome() {

    const {handleSignOut} = useLogout()
    const {userDetails} = useUserDeatils()

    console.log(userDetails)

  return (
    <div className='row'>
      <Nav/>
      movie
      <button onClick={handleSignOut}>log out</button>

      <Loader/>
    </div>
  )
}

export default MovieHome
