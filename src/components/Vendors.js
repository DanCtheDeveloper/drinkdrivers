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
            <h1>Breweries</h1>
            <div className="breweries">
                <ul>
                    <li>
                    <img className="beer" src= {require ("./images/A&W.png")} height={ 300 } width={ 300 } alt="A&W"/>
                    </li>
                    <li>
                    <img className="beer" src= {require ("./images/BUSCH.png")} height={ 300 } width={ 300 } alt="BUSCH"/>
                    </li>
                    <li>
                    <img className="beer" src= {require ("./images/coors-light.png")} height={ 300 } width={ 300 } alt="COORS"/>
                    </li>
                    <li>
                    <img className="beer" src= {require ("./images/amstel-beer.png")} height={ 300 } width={ 300 } alt="AMSTEL"/>
                    </li>
                </ul>
                <br />
                <Link to="/vendors" className='link'>Join Our Vendors!</Link>
            </div>
        </div>
    );
}