import React from 'react'
import Nav from '../components/Nav'
import Form from '../components/Form'
import useLogin from '../Hooks/useLogin'

function Login() {

    const {setEmail, setPassword, handleLogin} = useLogin()

    return (
        <div className='row'>
            <Nav none='none' />
            <div className="form">
                <Form
                    title='Login'
                    subTitle='Sign in if you already have an account.'
                    linkTo='/register'
                    underText='Don’t have an account? '
                    buttonText='Sign in'
                    underTextSec='Sign up for free'
                    none='none' 
                    setEmail={setEmail}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    />
            </div>
        </div>
    )
}

export default Login
