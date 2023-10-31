import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import './style.css';
// import Navbar from './Navbar';


const vendors = [
    { id: 1, name: 'H-Town Champs Craft Brewery' },
    { id: 2, name: 'House of Brew' },
    { id: 3, name: 'Surftown Brewery' },
    { id: 4, name: 'Texan Drafthouse' },
  ];

  export default function Vendors() {
    return (
        <div>
            <h1>Vendors</h1>
            <div className="breweries">
                <ul>
                    <li>
                        <Link to='/surftown'>
                            <img className="beer" src= {require ("./images/Surftown.png")} height={ 300 } width={ 300 } alt="Surftown"/>
                        </Link>
                    </li>
                    <li>
                        <Link to='/houseofbrew'>
                            <img className="beer" src= {require ("./images/Houseofbrew.png")} height={ 300 } width={ 300 } alt="Houseofbrew"/>
                        </Link>
                    </li>
                    <li>
                        <Link to='/htownbrew'>
                            <img className="beer" src= {require ("./images/H-Townbrew.png")} height={ 300 } width={ 300 } alt="H-Townbrew"/>
                        </Link>
                    </li>
                    <li>
                        <Link to='/texandrafthouse'>
                            <img className="beer" src= {require ("./images/Texandrafthouse.png")} height={ 300 } width={ 300 } alt="Texandrafthouse"/>
                        </Link>
                    </li>
                </ul>
                <br />
                <Link to="/vendorsignup" className='link'>Join Our Vendors!</Link>
            </div>
        </div>
    );
}