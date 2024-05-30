import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MovieHome from './pages/MovieHome';
import useUserDeatils from './Hooks/useUserDeatils';

function App() {

  const { isLoggedIn } = useUserDeatils()

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
