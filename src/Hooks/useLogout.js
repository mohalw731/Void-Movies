import React from 'react'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom'

export default function useLogout() {

    const navigate = useNavigate()

    const handleSignOut = async () => {
        try {
            await auth.signOut('/')
            console.log('logged out')
        } catch (error) {
            console.log(error)
        }
    }

    return {handleSignOut}
}
