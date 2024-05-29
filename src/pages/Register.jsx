import React from 'react'
import Nav from '../components/Nav'
import Form from '../components/Form'
import useRegister from '../Hooks/useRegister'

function Register() {

    const {setName, setEmail,setPassword, handleRegister } = useRegister()

    return (
        <div className='row'>
            <Nav none='none' />
            <div className="form">
                <Form
                    title='Sign up'
                    subTitle={'Join now and start using Void Movies.'}
                    linkTo='/login'
                    underText='Do you have an account? '
                    buttonText='Sign up'
                    underTextSec='Login'
                    setName={setName}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    handleRegister={handleRegister} />
            </div>
        </div>
    )
}

export default Register
