import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
  }

  return (
    <div className="signup">
      <h1>SIGN UP</h1>
      <form action="POST">
        <input  type="text"  onChange={(e) => setName(e.target.value)}  placeholder="username"/>
        <input  type="email"  onChange={(e) => setEmail(e.target.value)}  placeholder="email"/>
        <input  type="password"  onChange={(e) => setPassword(e.target.value)}  placeholder="password"/>
        <button type="submit" onClick={submit}>
          REGISTER
        </button>
      </form>
      <br />
      <p>Already have an account?</p>
      <br />
      <Link to="/login">LOGIN</Link>
    </div>
  );
}
