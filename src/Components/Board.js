    import React from "react";
    import Cell from "./Cell";

    const Board = ({ board, handleClick }) => {
        return (
            <div className="board">
                {board.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                        <Cell
                            key={`${rowIndex}${colIndex}`}
                            value={cell}
                            onClick={() => handleClick(rowIndex, colIndex)}
                        />
                    ))
                )}
            </div>
        );
    };  

    export default Board;
