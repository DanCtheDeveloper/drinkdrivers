import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Vendorignup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
  }

  return (
    <div className="signup">
      <h1>Welcome To Our Vendors!<br />Create your account here</h1>
      <form action="POST">
        <input  type="text"  onChange={(e) => setName(e.target.value)}  placeholder="username" className='name'/>
        <br />
        <input  type="email"  onChange={(e) => setEmail(e.target.value)}  placeholder="email" className='email'/>
        <br />
        <input  type="password"  onChange={(e) => setPassword(e.target.value)}  placeholder="password" className='password'/>
        <br />
        <button type="submit" onClick={submit} className='submit'>
          Start Your Journey
        </button>
      </form>
    </div>
  );
}