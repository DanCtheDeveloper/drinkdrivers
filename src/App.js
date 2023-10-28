import React from "react";
import Navbar from './Navbar';
import './style.css';
import Age from './components/Age';
import Underage from './components/underage';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/Signup';
import Vendors from './components/Vendors';
import { Route, Routes, useLocation} from 'react-router-dom';

function App() {
  const location = useLocation();
  const renderNavbar = !['/', '/underage'].includes(location.pathname);
  return (
    <>
      {renderNavbar && <Navbar />}
      <div className="container">
        <Routes>
          <Route path="/" element={<Age />} />
          <Route path="/underage" element={<Underage />} />
          <Route path="/home" element={<Home />} />
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
