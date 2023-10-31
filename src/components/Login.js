import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();
        // try {
        //     await axios.post('http://localhost:8000/login', { email, password });
        // } catch (e) {
        //     console.log(e);
        // }
    }

    return (
        <div className="login">
            <h1>Welcome User!</h1>
            <form action="POST">
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" className='email'/>
                <br />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" className='password'/>
                <br />
                <Link to="/DanHome" className='link'>Log in & Get Beer</Link>
            </form>
            <br />
            <Link to="/signup" className="link">
                Don't have an account?
                Create one here!
            </Link>
        </div>
    );
}