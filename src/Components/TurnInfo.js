import React from "react";

const TurnInfo = ({ currentPlayer }) => {
    return (
        <h3 style={{ color: currentPlayer === "❌" ? "red" : "green" }}>
            It's {currentPlayer} turn
        </h3>
    );
};

export default TurnInfo;
