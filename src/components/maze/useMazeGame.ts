// components/maze/useMazeGame.ts
import { useEffect, useRef, useState } from "react";
import { generateMaze } from "@/utils/generateMaze";
import { Howl } from "howler";
import confetti from "canvas-confetti";

const CHALLENGES = ["reorder", "match", "traffic", "clean", "quiz"] as const;
type ChallengeType = (typeof CHALLENGES)[number];

export function useMazeGame(size: number) {
  const [maze, setMaze] = useState<string[][]>([]);
  const [playerPos, setPlayerPos] = useState({ row: 0, col: 0 });
  const [seconds, setSeconds] = useState(0);
  const [finished, setFinished] = useState(false);
  const [challengeCount, setChallengeCount] = useState(0);
  const [showChallenge, setShowChallenge] = useState(false);
  const [currentChallengeType, setCurrentChallengeType] =
    useState<ChallengeType | null>(null);
  const [challengeQueue, setChallengeQueue] = useState<ChallengeType[]>([]);
  const [completedObstacles, setCompletedObstacles] = useState<Set<string>>(
    new Set()
  );
  const [failedObstacles, setFailedObstacles] = useState<Set<string>>(
    new Set()
  );
  const [currentObstacleKey, setCurrentObstacleKey] = useState<string | null>(
    null
  );

  const stepSound = useRef<Howl | null>(null);
  const winSound = useRef<Howl | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const mazeData = generateMaze(size);
    setMaze(mazeData);
    setPlayerPos({ row: 0, col: 0 });
    setSeconds(0);
    setFinished(false);
    setChallengeCount(0);
    setCompletedObstacles(new Set());
    setFailedObstacles(new Set());
    setChallengeQueue(shuffleChallenges());
    setShowChallenge(false);
    setCurrentChallengeType(null);
    setCurrentObstacleKey(null);
  }, [size]);

  useEffect(() => {
    timerRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timerRef.current!);
  }, []);

  useEffect(() => {
    stepSound.current = new Howl({ src: ["/step.mp3"] });
    winSound.current = new Howl({ src: ["/win.mp3"] });
  }, []);

  const shuffleChallenges = (): ChallengeType[] => {
    const arr = [...CHALLENGES];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const handleMove = (dRow: number, dCol: number) => {
    if (finished || showChallenge) return;

    const newRow = playerPos.row + dRow;
    const newCol = playerPos.col + dCol;

    if (
      newRow < 0 ||
      newRow >= maze.length ||
      newCol < 0 ||
      newCol >= maze[0].length
    )
      return;

    const cell = maze[newRow][newCol];
    const key = `${newRow},${newCol}`;

    if (cell === "X") return;

    if (
      cell === "O" &&
      !completedObstacles.has(key) &&
      !failedObstacles.has(key)
    ) {
      const nextChallenge =
        challengeQueue[challengeCount % challengeQueue.length];
      setCurrentChallengeType(nextChallenge);
      setCurrentObstacleKey(key);
      setShowChallenge(true);
      return;
    }

    setPlayerPos({ row: newRow, col: newCol });
    stepSound.current?.play();
  };

  const handleChallengeComplete = () => {
    if (currentObstacleKey) {
      setCompletedObstacles((prev) => new Set(prev).add(currentObstacleKey));
    }
    setChallengeCount((count) => count + 1);
    setShowChallenge(false);
    setCurrentChallengeType(null);
    setCurrentObstacleKey(null);

    if (challengeCount + 1 >= 3) {
      setFinished(true);
      winSound.current?.play();
      confetti({ particleCount: 150, spread: 80 });
    }
  };

  const handleChallengeCancel = () => {
    if (currentObstacleKey) {
      setFailedObstacles((prev) => new Set(prev).add(currentObstacleKey));
    }
    setShowChallenge(false);
    setChallengeCount((count) => count + 1);
    setCurrentChallengeType(null);
    setCurrentObstacleKey(null);
  };

  return {
    maze,
    playerPos,
    seconds,
    finished,
    challengeCount,
    challengeQueue,
    currentChallengeType,
    showChallenge,
    completedObstacles,
    failedObstacles,
    handleMove,
    handleChallengeComplete,
    handleChallengeCancel,
  };
}
