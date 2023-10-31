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
import Vendorsignup from './components/Vendorsignup';
import Brews from './components/Brews';
import Htownbrew from "./components/H-Townbrew";
import Houseofbrew from "./components/Houseofbrew";
import Surftown from "./components/Surftown";
import Texandrafthouse from "./components/Texandrafthouse";
import { Route, Routes, useLocation} from 'react-router-dom';
import DanHome from './components/DanHome';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  
  const location = useLocation();
  const renderNavbar = !['/', '/underage'].includes(location.pathname);
  return (
    <>
      {renderNavbar && <Navbar />}
      <div className="container">
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Age />} />
          <Route path="/underage" element={<Underage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/brews" element={<Brews />} />
          <Route path="/vendorsignup" element={<Vendorsignup />} />
          <Route path="/htownbrew" element={<Htownbrew />} />
          <Route path="/houseofbrew" element={<Houseofbrew />} />
          <Route path="/surftown" element={<Surftown />} />
          <Route path="/texandrafthouse" element={<Texandrafthouse />} />
          <Route path="/DanHome" element={<DanHome />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
