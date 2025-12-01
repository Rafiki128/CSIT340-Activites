import React from "react";
import "./SdBoard.css";

function SdBoard() {
  const grid = [
    ["X", " ", "/", " ", "-", " ", "+", " "],
    [" ", "/", " ", "x", " ", "+", " ", "-"],
    ["-", " ", "+", " ", "x", " ", "/", " "],
    [" ", "+", " ", "-", " ", "/", " ", "x"],
    ["x", " ", "/", " ", "-", " ", "+", " "],
    [" ", "/", " ", "x", " ", "+", " ", "-"],
    ["-", " ", "+", " ", "x", " ", "/", " "],
    [" ", "+", " ", "-", " ", "/", " ", "x"],
  ];

  return (
    <div>
        <h2>SCIDAMATH BOARD</h2>
    <div className="board">
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const isDark = (rowIndex + colIndex) % 2 === 1;
          return (
            <button
              key={`${rowIndex}-${colIndex}`}
              className={`cell ${isDark ? "dark" : "light"}`}
            >
              {cell}
            </button>
          );
        })
      )}
    </div>
    </div>
  );
}

export default SdBoard;
