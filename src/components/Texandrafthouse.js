import React from "react";

export default function Texandrafthouse() {
    return (
        <div>
            <h1>Texandrafthouse</h1>
            <div>
                <img
                    src={require("./images/Texandrafthouse.png")}
                    height={300}
                    width={300}
                    alt="Texandrafthouse"
                    className="beer"
                />
            </div>
        </div>
    );
}