import React from "react";

export default function Htownbrew() {
    return (
        <div>
            <h1>H-Town Champs Craft Brewery</h1>
            <div>
                <img
                    src={require("./images/H-Townbrew.png")}
                    height={300}
                    width={300}
                    alt="H-Townbrew"
                    className="beer"
                />
            </div>
        </div>
    );
}