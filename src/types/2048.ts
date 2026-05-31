export type Board = number[][];

export interface GameState {
  board: Board;
  score: number;
  gameOver: boolean;
}