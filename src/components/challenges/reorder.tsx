// src/components/challenges/reorder.tsx
"use client";

import { useEffect, useState } from "react";
import { getKeywordsBySize } from "@/data/keywords";
import { Button } from "@/components/ui/button";
import { EmojiFeedback } from "../EmojiFeedback";
import { useSearchParams } from "next/navigation";

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function ChallengeReorder({
  onSuccess,
  onCancel,
}: {
  onSuccess: () => void;
  onCancel: () => void;
}) {
  const [targetWord, setTargetWord] = useState("");
  const [hint, setHint] = useState("");
  const [shuffled, setShuffled] = useState<string[]>([]);
  const [slots, setSlots] = useState<(string | null)[]>([]);
  const [draggingChar, setDraggingChar] = useState<string | null>(null);
  const [failCount, setFailCount] = useState(0);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackType, setFeedbackType] = useState<"success" | "fail" | null>(
    null
  );
  const [pendingAction, setPendingAction] = useState<
    "success" | "cancel" | null
  >(null);
  const searchParams = useSearchParams();
  const size = parseInt(searchParams.get("size") || "8");

  useEffect(() => {
    const options = getKeywordsBySize(size);
    const { word, hint } = options[Math.floor(Math.random() * options.length)];
    const cleanWord = word.replace(/ /g, "");
    const chars = cleanWord.split("");
    setTargetWord(word);
    setHint(hint);
    const freqMap: Record<string, number> = {};
    for (const char of chars) {
      freqMap[char] = (freqMap[char] || 0) + 1;
    }
    const fullCharList: string[] = [];
    for (const [char, count] of Object.entries(freqMap)) {
      for (let i = 0; i < count; i++) fullCharList.push(char);
    }

    const letters = "abcdefghijklmnopqrstuvwxyz";
    while (fullCharList.length < chars.length + 3) {
      const randomChar = letters[Math.floor(Math.random() * letters.length)];
      if (!cleanWord.includes(randomChar)) {
        fullCharList.push(randomChar);
      }
    }

    const shuffledChars = shuffle(fullCharList);

    let hintCount = 2;
    if (chars.length >= 6 && chars.length <= 8) hintCount = 3;
    if (chars.length > 8 && chars.length <= 10) hintCount = 4;
    if (chars.length > 10) hintCount = 5;

    const hintIndices = new Set<number>();
    while (hintIndices.size < hintCount) {
      const index = Math.floor(Math.random() * chars.length);
      hintIndices.add(index);
    }

    const newSlots: (string | null)[] = Array(chars.length).fill(null);
    const updatedShuffled = [...shuffledChars];

    hintIndices.forEach((i) => {
      newSlots[i] = chars[i];
      const idxInShuffle = updatedShuffled.indexOf(chars[i]);
      if (idxInShuffle !== -1) updatedShuffled.splice(idxInShuffle, 1);
    });

    setSlots(newSlots);
    setShuffled(updatedShuffled);
  }, []);

  const handleDrop = (index: number) => {
    if (!draggingChar) return;
    const newSlots = [...slots];
    newSlots[index] = draggingChar;
    setSlots(newSlots);
    setShuffled((prev) => {
      const idx = prev.indexOf(draggingChar);
      if (idx > -1) {
        const newArr = [...prev];
        newArr.splice(idx, 1);
        return newArr;
      }
      return prev;
    });
    setDraggingChar(null);
  };

  const handleRemove = (index: number) => {
    const char = slots[index];
    if (!char) return;
    setShuffled((prev) => [...prev, char]);
    const newSlots = [...slots];
    newSlots[index] = null;
    setSlots(newSlots);
  };

  const handleCheck = () => {
    const built = slots.join("");
    const answer = targetWord.replace(/ /g, "");

    if (built === answer) {
      setFeedbackType("success");
      setFeedbackOpen(true);
      setPendingAction("success");
    } else {
      const newFailCount = failCount + 1;
      setFailCount(newFailCount);
      setFeedbackType("fail");
      setFeedbackOpen(true);
      if (newFailCount >= 3) {
        setPendingAction("cancel");
      }
    }
  };

  const handleFeedbackClose = () => {
    setFeedbackOpen(false); // QUAN TRỌNG
    console.log(pendingAction);
    if (pendingAction === "success") onSuccess();
    if (pendingAction === "cancel") onCancel();
    setPendingAction(null);
  };

  return (
    <>
      <div className="space-y-4">
        <p className="text-black text-lg">Gợi ý: {hint}</p>

        <div className="flex justify-center gap-2 flex-wrap">
          {slots.map((char, idx) => (
            <div
              key={idx}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(idx)}
              onClick={() => handleRemove(idx)}
              className="w-16 h-16 border rounded flex items-center justify-center text-2xl  bg-white cursor-pointer"
              title={char ? "Bấm để gỡ" : ""}
            >
              {char}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {shuffled.map((char, idx) => (
            <div
              key={idx}
              draggable
              onDragStart={() => setDraggingChar(char)}
              className="cursor-move w-16 h-16 border rounded flex items-center justify-center bg-green-700 hover:bg-green-600 text-white text-2xl"
            >
              {char}
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Button onClick={handleCheck}>Kiểm tra</Button>

          <div className="flex justify-center gap-1 mt-4">
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
        onClose={handleFeedbackClose}
      />
    </>
  );
}
