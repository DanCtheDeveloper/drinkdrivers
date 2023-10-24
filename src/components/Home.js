import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <img src="./images/Welcome.png" alt="Welcome"/>
            <div>
                <Link to={'/vendors'}>
                    <button>View Vendors</button>
                </Link>
                <Link to={'/brews'}>
                    <button>House Brews</button>
                </Link>
                <Link to={'/about'}>
                    <button>About</button>
                </Link>
                <Link to={'/signup'}>
                    <button>Don't have an account? Sign up here!</button>
                </Link>
            </div>

        </div>
    );
}