// src/app/maze/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { ChallengeModal } from "@/components/maze/ChallengeModal";
import { MazeBoard } from "@/components/maze/MazeBoard";
import { useMazeGame } from "@/components/maze/useMazeGame";
import { VictoryScreen } from "@/components/VictoryScreen";
import { DefeatScreen } from "@/components/DefeatScreen";
import Image from "next/image";

export default function MazePage() {
  const searchParams = useSearchParams();
  const size = parseInt(searchParams.get("size") || "10");

  const {
    maze,
    playerPos,
    seconds,
    finished,
    challengeCount,
    currentChallengeType,
    showChallenge,
    completedObstacles,
    failedObstacles,
    handleMove,
    handleChallengeComplete,
    handleChallengeCancel,
  } = useMazeGame(size);

  return (
    <main
      className="min-h-screen p-4 bg-green-50 flex items-center justify-center gap-8"
      style={{
        backgroundImage: 'url("/background.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Bên trái mê cung */}
      <div className="absolute left-4 top-0 bottom-0 flex flex-col justify-between w-[260px] text-white py-6">
        {/* Logo */}
        <div className="flex justify-center">
          <Image src="/logo.png" alt="Logo" width={200} height={120} />
        </div>

        {/* Tên trạm */}
        <h2 className="text-3xl font-extrabold text-center tracking-wide drop-shadow">
          TỈNH TÁO
        </h2>

        {/* Thông tin trạng thái */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-inner space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="font-medium">Thời gian:</span>
            <span>{seconds} giây</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Đã hoàn thành:</span>
            <span>{challengeCount}/5</span>
          </div>
        </div>
      </div>

      {/* MazeBoard ở giữa */}
      <MazeBoard
        maze={maze}
        playerPos={playerPos}
        completedObstacles={completedObstacles}
        onMove={handleMove}
        failedObstacles={failedObstacles}
        showChallenge={showChallenge}
      />

      {finished && <VictoryScreen />}
      {failedObstacles.size >= 3 && <DefeatScreen />}

      {/* Modal thử thách */}
      <ChallengeModal
        show={showChallenge}
        type={currentChallengeType}
        onSuccess={handleChallengeComplete}
        onCancel={handleChallengeCancel}
      />
    </main>
  );
}
