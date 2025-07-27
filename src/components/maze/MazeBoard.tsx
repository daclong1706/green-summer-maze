// components/maze/MazeBoard.tsx
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

interface MazeBoardProps {
  maze: string[][];
  playerPos: { row: number; col: number };
  completedObstacles: Set<string>;
  failedObstacles: Set<string>;
  showChallenge: boolean;
  onMove: (dRow: number, dCol: number) => void;
}

export const MazeBoard = ({
  maze,
  playerPos,
  completedObstacles,
  failedObstacles,
  showChallenge,
  onMove,
}: MazeBoardProps) => {
  const searchParams = useSearchParams();
  const size = parseInt(searchParams.get("size") || "8");

  const calculateCellSize = (size: number) => {
    const minSize = 8;
    const maxSize = 24;
    const maxCellSize = 56;
    const minCellSize = 24;

    if (size > 30) {
      return 18;
    }

    if (size > 40) {
      return 12;
    }

    if (size > 50) {
      return 8;
    }

    const clampedSize = Math.max(minSize, Math.min(size, maxSize));
    const t = (clampedSize - minSize) / (maxSize - minSize);
    return Math.round(maxCellSize - t * (maxCellSize - minCellSize));
  };

  const cellSize = calculateCellSize(size);

  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showChallenge) {
      boardRef.current?.focus();
    }
  }, [showChallenge]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowUp" || e.key === "w") onMove(-1, 0);
    if (e.key === "ArrowDown" || e.key === "s") onMove(1, 0);
    if (e.key === "ArrowLeft" || e.key === "a") onMove(0, -1);
    if (e.key === "ArrowRight" || e.key === "d") onMove(0, 1);
  };

  return (
    <div
      ref={boardRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="relative w-fit mx-auto outline-none"
    >
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: `repeat(${maze[0]?.length || 1}, ${cellSize}px)`,
        }}
      >
        {maze.map((row, r) =>
          row.map((cell, c) => {
            const key = `${r},${c}`;
            const isCompleted = completedObstacles.has(key);
            const isFailed = failedObstacles.has(key);
            return (
              <div
                key={key}
                style={{ width: `${cellSize}px`, height: `${cellSize}px` }}
                className={`rounded-sm flex items-center justify-center text-sm font-bold transition-colors duration-300
    ${
      cell === "X"
        ? "bg-[#DE5C36]"
        : cell === "O"
        ? isCompleted
          ? "bg-green-500 text-white"
          : isFailed
          ? "bg-red-500 text-white"
          : "bg-yellow-500 text-white"
        : cell === "G"
        ? "bg-green-500"
        : "bg-green-50"
    }`}
              >
                {cell === "O" && (isCompleted ? "✓" : isFailed ? "✘" : "?")}
              </div>
            );
          })
        )}
      </div>

      <motion.img
        src="/player.png"
        alt="Player"
        className="absolute"
        style={{
          width: `${cellSize - 8}px`,
          height: `${cellSize - 4}px`,
        }}
        initial={false}
        animate={{
          top: playerPos.row * (cellSize + 4) + 4,
          left: playerPos.col * (cellSize + 4) + 4,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </div>
  );
};
