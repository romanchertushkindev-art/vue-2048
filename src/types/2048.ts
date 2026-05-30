export type CellValue = 0 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096 | 8192
export type Board = CellValue[][]
export type Direction = 'up' | 'down' | 'left' | 'right'
export type GameStatus = 'playing' | 'won' | 'lost'

export interface GameSnapshot {
  board: Board
  score: number
  status: GameStatus
}