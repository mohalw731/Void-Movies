import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MovieHome from './pages/MovieHome';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from './Firebase'; // Make sure to configure Firebase

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth(firebaseApp);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route 
            path='/' 
            element={isLoggedIn ? <MovieHome /> : <Home />} 
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
