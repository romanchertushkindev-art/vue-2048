import { ref } from 'vue';

const SIZE = 4;

export function use2048() {
  const board = ref<number[][]>([]);
  const score = ref(0);

  function createBoard() {
    board.value = Array(SIZE)
      .fill(null)
      .map(() => Array(SIZE).fill(0));

    addRandomTile();
    addRandomTile();
  }

  function addRandomTile() {
    const empty = [];

    for (let y = 0; y < SIZE; y++) {
      for (let x = 0; x < SIZE; x++) {
        if (board.value[y][x] === 0) {
          empty.push({ x, y });
        }
      }
    }

    if (!empty.length) return;

    const cell = empty[Math.floor(Math.random() * empty.length)];

    board.value[cell.y][cell.x] =
      Math.random() < 0.9 ? 2 : 4;
  }

  function mergeRow(row: number[]) {
    const filtered = row.filter(Boolean);

    for (let i = 0; i < filtered.length - 1; i++) {
      if (filtered[i] === filtered[i + 1]) {
        filtered[i] *= 2;
        score.value += filtered[i];
        filtered[i + 1] = 0;
      }
    }

    return [
      ...filtered.filter(Boolean),
      ...Array(SIZE - filtered.filter(Boolean).length).fill(0),
    ];
  }

  function moveLeft() {
    let changed = false;

    board.value = board.value.map(row => {
      const merged = mergeRow(row);

      if (JSON.stringify(row) !== JSON.stringify(merged)) {
        changed = true;
      }

      return merged;
    });

    if (changed) addRandomTile();
  }

  createBoard();

  return {
    board,
    score,
    moveLeft,
    createBoard,
  };
}