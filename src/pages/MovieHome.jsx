import React from 'react'
import useLogout from '../Hooks/useLogout'

function MovieHome() {

    const {handleSignOut} = useLogout()

  return (
    <div>
      movie
      <button onClick={handleSignOut}>log out</button>
    </div>
  )
}

export default MovieHome
