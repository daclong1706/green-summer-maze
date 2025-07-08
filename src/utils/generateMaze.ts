// src/utils/generateMaze.ts
export type CellType = " " | "X" | "O";

export function generateMaze(size: number): CellType[][] {
  const maze: CellType[][] = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => "X")
  );

  const visited = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => false)
  );

  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  function shuffle<T>(array: T[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function carve(row: number, col: number) {
    visited[row][col] = true;
    maze[row][col] = " ";
    const dirList = [...dirs];
    shuffle(dirList);

    for (const [dx, dy] of dirList) {
      const newRow = row + dx * 2;
      const newCol = col + dy * 2;
      if (
        newRow >= 0 &&
        newRow < size &&
        newCol >= 0 &&
        newCol < size &&
        !visited[newRow][newCol]
      ) {
        maze[row + dx][col + dy] = " ";
        carve(newRow, newCol);
      }
    }
  }

  carve(0, 0); // Bắt đầu từ góc trên trái

  // BFS tìm các ô có thể đi được từ (0,0)
  const queue: [number, number, number][] = [[0, 0, 0]]; // [row, col, dist]
  const visitedBFS = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => false)
  );
  visitedBFS[0][0] = true;
  const reachable: [number, number, number][] = [];

  while (queue.length > 0) {
    const [r, c, dist] = queue.shift()!;
    reachable.push([r, c, dist]);
    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;
      if (
        nr >= 0 &&
        nr < size &&
        nc >= 0 &&
        nc < size &&
        !visitedBFS[nr][nc] &&
        maze[nr][nc] === " "
      ) {
        visitedBFS[nr][nc] = true;
        queue.push([nr, nc, dist + 1]);
      }
    }
  }

  // Chọn 5 vị trí để đặt chướng ngại vật "O"
  const obstacles = new Set<string>();
  shuffle(reachable);
  let count = 0;
  for (const [r, c, _] of reachable) {
    if ((r === 0 && c === 0) || obstacles.has(`${r},${c}`)) continue;
    maze[r][c] = "O";
    obstacles.add(`${r},${c}`);
    count++;
    if (count === 4) break;
  }

  // Đặt chướng ngại vật cuối cùng tại điểm xa nhất
  const farthest = reachable.reduce((max, curr) =>
    curr[2] > max[2] ? curr : max
  );
  const [fr, fc] = farthest;
  maze[fr][fc] = "O";

  return maze;
}
