export type CellType = " " | "X" | "G";

export const levels: CellType[][][] = [
  // Level 1: 10x10
  [
    [" ", " ", "X", " ", " ", " ", "X", " ", " ", " "],
    ["X", " ", "X", "X", " ", "X", "X", " ", "X", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", "X", " "],
    [" ", "X", "X", "X", "X", "X", "X", " ", "X", " "],
    [" ", "X", " ", " ", " ", " ", " ", " ", "X", " "],
    [" ", "X", " ", "X", "X", "X", "X", "X", "X", " "],
    [" ", "X", " ", "X", " ", " ", " ", " ", " ", " "],
    [" ", "X", " ", "X", " ", "X", "X", "X", "X", " "],
    [" ", " ", " ", "X", " ", " ", " ", " ", " ", " "],
    ["X", "X", " ", "X", "X", "X", "X", "X", "X", "G"],
  ],
  // Level 2: 16x16, Level 3: 20x20, ...
];
