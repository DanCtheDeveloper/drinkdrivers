import React from "react";

export default function Houseofbrew() {
    return (
        <div>
            <h1>Houseofbrew</h1>
            <div>
                <img
                    src={require("./images/Houseofbrew.png")}
                    height={300}
                    width={300}
                    alt="Houseofbrew"
                    className="beer"
                />
            </div>
        </div>
    );
}