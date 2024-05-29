import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useLogin from '../Hooks/useLogin';

function Form({
    title,
    subTitle,
    linkTo,
    underText,
    buttonText,
    underTextSec,
    none,
    setName,
    setEmail,
    setPassword,
    handleRegister,
    handleLogin }) {

    const onSubmitHandler = handleLogin ? handleLogin : handleRegister;

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="form-text">
                <h1>{title}</h1>
                <p>{subTitle}</p>
            </div>
            <input
                type="text"
                name=""
                id=""
                placeholder="Name"
                className={none}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                name=""
                id=""
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                min={6}
            />
            <button>{buttonText}</button>
            <div className="form-cta">
                <p className="signup-form__text">
                    {underText}
                    <Link to={linkTo}>{underTextSec}</Link>
                </p>
            </div>
            <ToastContainer />
        </form>
    );
}

export default Form;
