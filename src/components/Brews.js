import React from "react";
import { Link } from "react-router-dom";

export default function Brews() {
    return(
    <div>
            <h1>Brews</h1>
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
            </div>
        </div>
    );
}