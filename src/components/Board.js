import React from "react";
import SquareTile from "./SquareTile";
import King from "./King";
import "../styles/Board.css"

export default function Board() {
  const width = 8;
  const height = 8;

  const adjacencyMatrix = Array.from({ length: height }, (_, row) =>
    Array.from({ length: width }, (_, col) => ({ row, col }))
  );

  const getColorFlag = (row, col) => ((row + col) % 2 === 0 ? 1 : 0); // black = 1, white = 0

  return (
    <div className="board">
      {adjacencyMatrix.map((rowArray, rowIdx) => (
        <div className="row" key={rowIdx}>
          {rowArray.map((_, colIdx) => (
            <SquareTile
              key={`${rowIdx}-${colIdx}`}
              colorFlag={getColorFlag(rowIdx, colIdx)}
            />
          ))}
        </div>
      ))}
      <King />
    </div>
  );
}
