// src/components/__tests__/Board.test.js

import { render, screen } from '@testing-library/react';
import Board from '../Board';

describe('Board component', () => {
  test('renders an 8x8 grid of tiles', () => {
    render(<Board />);
    const tiles = screen.getAllByTestId('tile');
    expect(tiles.length).toBe(64);
  });

  test('renders correct tile pattern (black/white alternating)', () => {
    render(<Board />);
    const tiles = screen.getAllByTestId('tile');

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const index = row * 8 + col;
        const tile = tiles[index];
        const isBlack = (row + col) % 2 === 1;
        expect(tile).toHaveClass(isBlack ? 'black' : 'white');
      }
    }
  });
});
