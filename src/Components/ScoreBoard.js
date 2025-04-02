import React from "react";
import "./ScoreBoard.css";

const ScoreBoard = ({ xScore, oScore }) => {
    return (
        <div className="score-container">
            <h2>Scoreboard</h2>
            <table className="score-table">
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>❌</td>
                        <td>{xScore}</td>
                    </tr>
                    <tr>
                        <td>🟢</td>
                        <td>{oScore}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ScoreBoard;
