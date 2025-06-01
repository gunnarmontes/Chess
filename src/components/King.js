import React from "react";

export default function King({ position, boardSize = 8, onMoveSelect }) {
  const directions = [
    [-1, 0], [1, 0],  // up, down
    [0, -1], [0, 1],  // left, right
    [-1, -1], [-1, 1], // diagonals
    [1, -1], [1, 1]
  ];

  const calculateValidMoves = () => {
    const moves = [];
    directions.forEach(([dx, dy]) => {
      const newRow = position.row + dx;
      const newCol = position.col + dy;
      if (newRow >= 0 && newRow < boardSize && newCol >= 0 && newCol < boardSize) {
        moves.push({ row: newRow, col: newCol });
      }
    });
    return moves;
  };

  const handleClick = () => {
    const validMoves = calculateValidMoves();
    onMoveSelect(validMoves);
  };

  return (
    <div
      className="chess-piece king"
      onClick={handleClick}
      title="King (Click to show moves)"
    >
      ♔ {/* White king unicode */}
    </div>
  );
}
