import React, { useState } from 'react';
import './App.css';
import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ServicesUs from './pages/ServicesUs';
import Career from './pages/Career';
import TheLogin from './components/TheLogin';

function App() {
  const loginStatus = localStorage.getItem('loginStatus');
  console.log("FromApp.js",loginStatus);
  return (
    <Router>
      <div className="App">
        {loginStatus === 'true' ? (
          <>
            <TheHeader />
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/service-us" element={<ServicesUs />} />
              <Route path="/career" element={<Career />} />
              <Route path="/contact" element={<ContactUs />} />


            </Routes>
            <TheFooter />
          </>

        ) : (
          <TheLogin />
        )}
      </div>
    </Router>
  );
}

export default App;
