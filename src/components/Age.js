import React from "react";
import { Link } from "react-router-dom"

export default function Age() {
    return (
        <div className="ageV">
            <p className="age">
                21+
                <br />
                <Link to="/home"><button className="yesbtn">Yes</button></Link>
                <br />
                <Link to="/underage"><button className="nobtn">No</button></Link>
            </p>
        </div>
    );
}