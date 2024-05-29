import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../Firebase';
import { toast } from 'react-toastify';

export default function useLogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async e => {
        e.preventDefault();

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long', {
                position: 'top-right',
                className: 'toast-message',
            });
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password)

            toast.success('Successfully Signed-in', {
                position: 'top-right',
                className: 'toast-message',
            });
            console.log('logged in')
        } catch (error) {
            if (error.code === 'auth/invalid-credential') {
                toast.error('The email address or password is incorrect. Please retry...', {
                    position: 'top-right',
                    className: 'toast-message',
                });
            } else {
                console.error(error);
                toast.error('Something went wrong', {
                    position: 'top-right',
                    className: 'toast-message',
                });
            }
        }
        }
    

    return {email, setEmail, password, setPassword, handleLogin}
}
