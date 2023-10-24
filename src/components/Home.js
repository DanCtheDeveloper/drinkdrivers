import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div>
            <img src= {require("./images/Welcome.png")} height={ 350 } width={ 400 } alt="Welcome" className="welcome"/>
            
            <div className="home">
                <br />
                <Link to={'/vendors'} className="link">
                    View Vendors
                </Link>
                <br />
                <Link to={'/brews'} className="link">
                    House Brews
                </Link>
                <br />
                <Link to={'/about'} className="link">
                    About
                </Link>
                <br />
                <Link to={'/signup'} className="link">
                    Don't have an account? Sign up here!
                </Link>
            </div>

        </div>
    );
}