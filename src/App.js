import React from "react";
import Navbar from './Navbar';
import './style.css';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/Signup';
import Vendors from './components/Vendors';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/vendors" element={<Vendors />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
