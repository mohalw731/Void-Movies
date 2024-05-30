import React, { useEffect, useState } from 'react'
import { auth,db } from '../Firebase'
import {doc , getDoc} from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from '../Firebase';

export default function useUserDeatils() {
const [userDetails, setUserDetails] = useState(null)
const [isLoggedIn, setIsLoggedIn] = useState(false);
const auth = getAuth(firebaseApp);

const getUserDeatils = async () => {
    auth.onAuthStateChanged(async user =>  {
        const docRef = doc(db, 'User', user.uid)
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()) {
            setUserDetails(docSnap.data())
        }
    })
}

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
  getUserDeatils()
    return () => unsubscribe();
  }, [auth]);



return {userDetails, isLoggedIn}
}
