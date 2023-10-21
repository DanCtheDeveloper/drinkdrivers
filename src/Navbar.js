import { Link } from "react-router-dom"
export default function Navbar() {
    return(
        <nav className="nav">
            <Link to="/" className="drink-drives">DRINK DRIVES</Link>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
            </ul>
        </nav>
    )
}