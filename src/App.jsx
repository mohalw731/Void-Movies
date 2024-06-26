import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MovieHome from './pages/MovieHome';
import useUserDeatils from './Hooks/useUserDeatils';
import Profile from './pages/Profile';
import Details from './pages/Details';
import Search from './pages/Search';

function App() {

  const { isLoggedIn } = useUserDeatils()

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={isLoggedIn ? <MovieHome /> : <Login />} />

          <Route path='/register' element={isLoggedIn ? <MovieHome /> : <Register />} />

          <Route
            path='/'
            element={isLoggedIn ? <MovieHome /> : <Home />}
          />
          
          <Route
            path='/profile'
            element={isLoggedIn ? <Profile /> : <Login />}
          />

          <Route
            path='/details/:id'
            element={isLoggedIn ? <Details /> : <Login />}
          />

          <Route
            path='/search'
            element={isLoggedIn ? <Search /> : <Login />}
          />

        </Routes>
      </Router>
    </>
  );
}

export default App;
