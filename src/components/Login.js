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
            <h1>LOGIN</h1>
            <form action="POST">
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                <button type="submit" onClick={submit}>LOGIN</button>
            </form>
            <br />
            <p>Don't have an account?</p>
            <br />
            <Link to="/signup">SIGN UP</Link>
        </div>
    );
}