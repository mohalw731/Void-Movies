import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth, db } from '../Firebase';
import { doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function useRegister() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long', {
                position: 'top-right',
                className: 'toast-message',
            });
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('registered');

            if (user) {
                await setDoc(doc(db, 'User', user.uid), {
                    email: user.email,
                    name,
                });

                toast.success('Successfully Registered', {
                    position: 'top-right',
                    className: 'toast-message',
                });
            }
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                toast.error('Email is already in use', {
                    position: 'top-right',
                    className: 'toast-message',
                });
            } else {
                console.error(error);
                toast.error('Registration failed', {
                    position: 'top-right',
                    className: 'toast-message',
                });
            }
        }
    };

   return{setName,email, setEmail,setPassword, handleRegister }
}
