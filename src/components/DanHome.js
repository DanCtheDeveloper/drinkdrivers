import React from "react";
import { Link } from "react-router-dom"

export default function DanHome() {
    return (
        <div>
            <img className="welcome" src= {require("./images/ddwelcome.png")} height={ 400 } width={ 400 } alt="Welcome"/>
            <div className="directory">
                Welcome to DrinkDrivers, Dan!
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
                </Link>
            </div>
        </div>
    );
};