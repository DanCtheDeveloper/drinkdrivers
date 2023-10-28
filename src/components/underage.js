import React from "react";
import { Link } from "react-router-dom";

export default function Underage() {
    return (
        <div className="ageV">
            <p className="age">
                NOPE
                <br />
                <h3>Maybe you would have more fun at PBS Kids</h3>
                <Link to="https://pbskids.org"><button className="nobtn">PBS Kids Link</button></Link>
            </p>
        </div>
    );
}