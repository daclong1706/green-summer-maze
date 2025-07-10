"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { ALL_CHALLENGES, ChallengeType } from "@/data/challenge-types";

export default function HomePage() {
  const router = useRouter();
  const [selectedChallenges, setSelectedChallenges] = useState<ChallengeType[]>(
    ["truth", "situation", "search"]
  );

  useEffect(() => {
    const saved = localStorage.getItem("selectedChallenges");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setSelectedChallenges(parsed);
      } catch {}
    }
  }, []);

  const toggleChallenge = (type: ChallengeType) => {
    setSelectedChallenges((prev) => {
      const updated = prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type];
      localStorage.setItem("selectedChallenges", JSON.stringify(updated));
      return updated;
    });
  };

  const handleStart = () => {
    router.push("/select-level");
  };

  return (
    <main
      className="min-h-screen p-4 bg-green-50 flex items-end justify-center gap-8 relative"
      style={{
        backgroundImage: 'url("/BG.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Nút "Bắt đầu chơi" */}
      <Button
        onClick={handleStart}
        className="text-lg px-6 py-6 rounded-md mb-32 bg-red-600 text-white shadow-lg hover:bg-red-700 transition-colors"
      >
        Bắt đầu chơi
      </Button>

      {/* Nút Setting ở góc dưới bên phải */}
      <div className="absolute bottom-4 right-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="text-lg">
              ⚙️
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Chọn loại thử thách</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {ALL_CHALLENGES.map((type) => (
                <Button
                  key={type}
                  variant={
                    selectedChallenges.includes(type) ? "default" : "outline"
                  }
                  onClick={() => toggleChallenge(type)}
                  className="text-sm capitalize"
                >
                  {type}
                </Button>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
}
