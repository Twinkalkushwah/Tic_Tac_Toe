import React, { useState } from "react";
import Board from "./Components/Board";
import TurnInfo from "./Components/TurnInfo";
import ScoreBoard from "./Components/ScoreBoard";
import { checkWinner, isDraw } from "./utils/gameLogic";
import "./style.css";

const App = () => {
  const [board, setBoard] = useState([
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState("❌");
  const [gameStatus, setGameStatus] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [statusMessage, setStatusMessage] = useState("");

  const handleClick = (row, col) => {
    if (!gameStatus || board[row][col] !== "-") return;

    const newBoard = [...board];
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);

    const winner = checkWinner(newBoard);
    if (winner) {
      setStatusMessage(`Player ${winner} Won 🎉`);
      setGameStatus(false);
      if (winner === "❌") setXScore(xScore + 1);
      else setOScore(oScore + 1);
      return;
    }

    if (isDraw(newBoard)) {
      setStatusMessage("Match Draw 🙅");
      setGameStatus(false);
      return;
    }

    setCurrentPlayer(currentPlayer === "❌" ? "🟢" : "❌");
  };

  const restartGame = () => {
    setBoard([
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ]);
    setStatusMessage("");
    setGameStatus(true);
  };

  const restartFullGame = () => {
    restartGame();
    setXScore(0);
    setOScore(0);
  };

  return (
    <div className="game-container">
      <h1>Welcome to Tic Tac Toe</h1>
      <ScoreBoard xScore={xScore} oScore={oScore} />
      <TurnInfo currentPlayer={currentPlayer} />
      <Board board={board} handleClick={handleClick} />
      <h2>{statusMessage}</h2>

      <button className="restart-btn" onClick={restartGame}>
        Restart
      </button>
      <button className="restart-full-btn" onClick={restartFullGame}>
        Restart Full Game
      </button>
    </div>
  );
};

export default App;
