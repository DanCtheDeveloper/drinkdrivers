import React from "react";

export default function Surftown() {
    return (
        <div>
            <h1>Surftown</h1>
            <div>
                <img
                    src={require("./images/Surftown.png")}
                    height={300}
                    width={300}
                    alt="Surftown"
                    className="beer"
                />
            </div>
        </div>
    );
}