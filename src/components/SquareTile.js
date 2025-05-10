import React from "react";
import "../styles/SquareTile.css";

export default function SquareTile({ colorFlag }) {
  return (
    <div className="tile-container">
      {colorFlag === 0 ? (
        <div className="white-tile">Tile</div>
      ) : (
        <div className="black-tile">Tile</div>
      )}
    </div>
  );
}
