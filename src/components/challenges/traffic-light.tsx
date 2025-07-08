// src/components/challenges/traffic-light.tsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { EmojiFeedback } from "../EmojiFeedback";
import { trafficActionsBySize, TrafficLevel } from "@/data/traffic-actions";

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const levelColors: Record<TrafficLevel, string> = {
  red: "bg-red-500",
  yellow: "bg-yellow-400",
  green: "bg-green-500",
};

const levelContents: Record<TrafficLevel, string> = {
  red: "Nguy hiểm",
  yellow: "Cẩn thận",
  green: "An toàn",
};

export function ChallengeTrafficLight({
  onSuccess,
  onCancel,
}: {
  onSuccess: () => void;
  onCancel: () => void;
}) {
  const searchParams = useSearchParams();
  const size = parseInt(searchParams.get("size") || "8");
  const [actions, setActions] = useState<
    { text: string; level: TrafficLevel }[]
  >([]);
  const [current, setCurrent] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackType, setFeedbackType] = useState<"success" | "fail" | null>(
    null
  );

  useEffect(() => {
    const pool = trafficActionsBySize[size] || [];
    const selected = shuffle(pool).slice(0, 5);
    setActions(selected);
  }, [size]);

  const handleAnswer = (choice: TrafficLevel) => {
    const answer = actions[current];
    const isCorrect = choice === answer.level;
    setFeedbackType(isCorrect ? "success" : "fail");
    setFeedbackOpen(true);

    if (isCorrect) {
      setCorrect((prev) => prev + 1);
    } else {
      const newFails = failCount + 1;
      setFailCount(newFails);
      if (newFails >= 3) {
        return setTimeout(onCancel, 1000);
      }
    }

    setTimeout(() => {
      setFeedbackOpen(false);
      const next = current + 1;
      if (next >= 5) {
        if (correct + (isCorrect ? 1 : 0) >= 3) {
          onSuccess();
        } else {
          onCancel();
        }
      } else {
        setCurrent(next);
      }
    }, 1000);
  };

  if (actions.length === 0) return null;

  return (
    <>
      <div className="space-y-4">
        <div className="flex justify-between">
          <p className="text-muted-foreground text-left mt-1">
            Phân loại hành vi sau:
          </p>
          <div className="flex justify-center gap-1">
            {Array.from({ length: 3 }).map((_, idx) => (
              <span key={idx} className="text-xl">
                {idx < 3 - failCount ? "❤️" : "🤍"}
              </span>
            ))}
          </div>
        </div>
        <div className="text-center text-2xl font-semibold bg-green-700 px-4 py-12 my-12 rounded text-white">
          {actions[current].text}
        </div>

        <div className="flex justify-center gap-4 mt-12">
          {(["red", "yellow", "green"] as TrafficLevel[]).map((level) => (
            <Button
              key={level}
              onClick={() => handleAnswer(level)}
              className={`text-white ${levelColors[level]} w-20 h-20 text-2xl rounded-full hover:${levelColors[level]} hover:scale-105 transition-transform duration-200`}
            >
              {/* {levelContents[level]} */}
            </Button>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            Câu {current + 1}/5 – Đúng {correct}/5
          </p>

          <div className="mt-2 text-sm text-muted-foreground space-y-1 text-left">
            <p>🔴 Đèn đỏ: Nguy hiểm! Không nên làm 🚫</p>
            <p>🟡 Đèn vàng: Cẩn thận! Hãy suy nghĩ trước 🤔</p>
            <p>🟢 Đèn xanh: An toàn! Có thể làm 👍</p>
          </div>
        </div>
      </div>
      <EmojiFeedback
        open={feedbackOpen}
        imageSrc={feedbackType === "success" ? "/success.png" : "/fail.png"}
        soundSrc={feedbackType === "success" ? "/success.mp3" : "/fail.mp3"}
        onClose={() => setFeedbackOpen(false)}
      />
    </>
  );
}
