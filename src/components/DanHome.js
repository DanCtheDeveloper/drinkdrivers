import React from "react";
import { Link } from "react-router-dom"

export default function DanHome() {
    return (
        <div>
                <div><h1>Welcome to DrinkDrivers, Dan!</h1></div>
            <img className="welcome" src= {require("./images/ddwelcome.png")} height={ 400 } width={ 400 } alt="Welcome"/>
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
            </div>
        </div>
    );
};