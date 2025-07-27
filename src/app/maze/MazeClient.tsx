// src/app/maze/MazeClient.tsx
"use client";

import { redirect, useRouter, useSearchParams } from "next/navigation";
import { ChallengeModal } from "@/components/maze/ChallengeModal";
import { MazeBoard } from "@/components/maze/MazeBoard";
import { useMazeGame } from "@/components/maze/useMazeGame";
import { VictoryScreen } from "@/components/VictoryScreen";
import { DefeatScreen } from "@/components/DefeatScreen";
import Image from "next/image";
import { ChallengeType } from "@/data/challenge-types";
import { useEffect, useState } from "react";

export default function MazeClient() {
  const searchParams = useSearchParams();
  const size = parseInt(searchParams.get("size") || "10");

  if (isNaN(size) || size <= 0 || size > 120) {
    // Redirect về trang nhập tuổi nếu size không hợp lệ
    redirect("/select-level");
  }

  const [challengeList, setChallengeList] = useState<ChallengeType[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("selectedChallenges");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setChallengeList(parsed);
      } catch {}
    }
  }, []);

  const {
    maze,
    playerPos,
    seconds,
    finished,
    // challengeCount,
    lost,
    currentChallengeType,
    showChallenge,
    completedObstacles,
    failedObstacles,
    handleMove,
    handleChallengeComplete,
    handleChallengeCancel,
  } = useMazeGame(size, challengeList);

  const router = useRouter();

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
        <div className="flex justify-center" onClick={() => router.push("/")}>
          <Image src="/logo.png" alt="Logo" width={200} height={120} />
        </div>
        <h2 className="text-3xl font-extrabold text-center tracking-wide drop-shadow">
          TỈNH TÁO
        </h2>
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-inner space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="font-medium">Thời gian:</span>
            <span>{seconds} giây</span>
          </div>
        </div>
      </div>

      <MazeBoard
        maze={maze}
        playerPos={playerPos}
        completedObstacles={completedObstacles}
        onMove={handleMove}
        failedObstacles={failedObstacles}
        showChallenge={showChallenge}
      />

      {finished && <VictoryScreen />}
      {lost && <DefeatScreen />}

      <ChallengeModal
        show={showChallenge}
        type={currentChallengeType}
        onSuccess={handleChallengeComplete}
        onCancel={handleChallengeCancel}
      />
    </main>
  );
}
