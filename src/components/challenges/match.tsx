// src/components/challenges/match.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { EmojiFeedback } from "../EmojiFeedback";
import { getPairsBySize } from "@/data/matching-pairs";

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function ChallengeMatch({
  onSuccess,
  onCancel,
}: {
  onSuccess: () => void;
  onCancel: () => void;
}) {
  const searchParams = useSearchParams();
  const size = parseInt(searchParams.get("size") || "8");

  const [pairs, setPairs] = useState<[string, string][]>([]);
  const [leftItems, setLeftItems] = useState<string[]>([]);
  const [rightItems, setRightItems] = useState<string[]>([]);
  const [selected, setSelected] = useState<{
    left: number | null;
    right: number | null;
  }>({ left: null, right: null });
  const [matched, setMatched] = useState<{ [key: number]: number }>({});
  const [attempts, setAttempts] = useState<number>(0);
  const [failCount, setFailCount] = useState<number>(0);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackType, setFeedbackType] = useState<"success" | "fail" | null>(
    null
  );

  useEffect(() => {
    const allPairs = getPairsBySize(size);
    const selectedPairs = shuffle(allPairs).slice(0, 5);
    setPairs(selectedPairs);
    setLeftItems(selectedPairs.map(([left]) => left));
    setRightItems(shuffle(selectedPairs.map(([_, right]) => right)));
  }, [size]);

  const handleSelect = (side: "left" | "right", index: number) => {
    setSelected((prev) => ({ ...prev, [side]: index }));
  };

  useEffect(() => {
    const { left, right } = selected;
    if (left !== null && right !== null) {
      const correctPair = pairs[left][1] === rightItems[right];

      if (correctPair) {
        setMatched((prev) => ({ ...prev, [left]: right }));
        setSelected({ left: null, right: null });
        setFeedbackType("success");
        setFeedbackOpen(true);
      } else {
        setSelected({ left: null, right: null });
        setFailCount((prev) => prev + 1);
        setFeedbackType("fail");
        setFeedbackOpen(true);
      }
      setAttempts((a) => a + 1);
    }
  }, [selected]);

  useEffect(() => {
    const correctCount = Object.keys(matched).length;
    if (correctCount === 5 || (attempts >= 5 && correctCount >= 3)) {
      onSuccess();
    } else if (failCount >= 3) {
      onCancel();
    }
  }, [matched, attempts, failCount]);

  return (
    <>
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground text-left">
          Ghép các hành vi với hậu quả phù hợp:
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            {leftItems.map(
              (text, idx) =>
                matched[idx] === undefined && (
                  <div
                    key={idx}
                    className={`px-2 py-4 rounded cursor-pointer text-xl text-white ${
                      selected.left === idx ? "bg-red-700" : "bg-green-700"
                    }`}
                    onClick={() => handleSelect("left", idx)}
                  >
                    {text}
                  </div>
                )
            )}
          </div>
          <div className="space-y-2">
            {rightItems.map(
              (text, idx) =>
                !Object.values(matched).includes(idx) && (
                  <div
                    key={idx}
                    className={`px-2 py-4 rounded cursor-pointer text-xl text-white ${
                      selected.right === idx ? "bg-blue-700" : "bg-green-700 "
                    }`}
                    onClick={() => handleSelect("right", idx)}
                  >
                    {text}
                  </div>
                )
            )}
          </div>
        </div>
        <div className="text-sm text-center text-muted-foreground space-y-1">
          <p>Đã nối đúng {Object.keys(matched).length}/5</p>
          <div className="flex justify-center gap-1">
            {Array.from({ length: 3 }).map((_, idx) => (
              <span key={idx} className="text-xl">
                {idx < 3 - failCount ? "❤️" : "🤍"}
              </span>
            ))}
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
