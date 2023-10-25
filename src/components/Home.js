import { Link } from "react-router-dom"
import "./Home.css"

export default function Home() {
    return (
        <div>

            <img className="welcome" src= {require("./images/ddwelcome.png")} height={ 500 } width={ 500 } alt="Welcome"/>
            <div className="directory">
                <Link to={'/vendors'}>
                    <button className="btn1"><span>Our Vendors</span></button>
                </Link>
                <Link to={'/brews'}>
                    <button className="btn2"><span>House Brews</span></button>
                </Link>
                <Link to={'/about'}>
                    <button className="btn3"><span>About Us</span></button>
                </Link>
                <Link to={'/signup'}>
                    <button className="btn4"><span>Don't have an account? Sign up here!</span></button>

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
                    Don't have an account? <br />Sign up here!
                </Link>
            </div>
        </div>
    );
}