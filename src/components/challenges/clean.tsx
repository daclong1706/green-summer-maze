// src/components/challenges/clean.tsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getCleanItemsBySize, CleanItem } from "@/data/clean-items";
import { EmojiFeedback } from "../EmojiFeedback";
// import Image from "next/image";
import { getRandomBgColor } from "@/utils/randomColor";

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function ChallengeClean({
  onSuccess,
  onCancel,
}: {
  onSuccess: () => void;
  onCancel: () => void;
}) {
  const searchParams = useSearchParams();
  const size = parseInt(searchParams.get("size") || "8");

  const [items, setItems] = useState<(CleanItem & { bgColor?: string })[]>([]);
  const [correct, setCorrect] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackType, setFeedbackType] = useState<"success" | "fail" | null>(
    null
  );

  useEffect(() => {
    const all = getCleanItemsBySize(size);
    const toDelete = shuffle(all.filter((i) => i.shouldDelete)).slice(0, 3);
    const toKeep = shuffle(all.filter((i) => !i.shouldDelete)).slice(0, 2);
    const combined = shuffle([...toDelete, ...toKeep]);

    // Gán màu cho item text
    const withColors = combined.map((item) => ({
      ...item,
      bgColor: item.type === "text" ? getRandomBgColor() : undefined,
    }));

    setItems(withColors);
  }, [size]);

  const handleDropToTrash = (item: CleanItem) => {
    if (item.shouldDelete) {
      setItems((prev) => prev.filter((i) => i.id !== item.id));
      setCorrect((c) => c + 1);
      setFeedbackType("success");
      setFeedbackOpen(true);
    } else {
      setFailCount((f) => f + 1);
      setFeedbackType("fail");
      setFeedbackOpen(true);
    }
  };

  useEffect(() => {
    if (correct === 3) {
      onSuccess();
    } else if (failCount >= 3) {
      onCancel();
    }
  }, [correct, failCount, onSuccess, onCancel]);

  return (
    <>
      <div className="text-center">
        <div className="flex justify-center gap-1">
          {Array.from({ length: 3 }).map((_, idx) => (
            <span key={idx} className="text-xl">
              {idx < 3 - failCount ? "❤️" : "🤍"}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {items.map((item) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => e.dataTransfer.setData("item-id", item.id)}
            className="border rounded shadow-md w-64 cursor-move text-center flex items-center justify-center"
            style={{
              backgroundColor: item.bgColor || "white",
            }} // thêm chiều cao cố định nếu cần
          >
            {item.type === "text" && <p className="m-4">{item.content}</p>}
            {/* {item.type === "image" && (
              <Image
                src={item.content}
                alt="image"
                width={256}
                height={160}
                className="rounded"
              />
            )} */}
          </div>
        ))}
      </div>

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          const id = e.dataTransfer.getData("item-id");
          const item = items.find((i) => i.id === id);
          if (item) handleDropToTrash(item);
        }}
        className="mt-10 mx-auto w-32 h-32 rounded-full border-4 border-red-500 flex items-center justify-center text-xl text-red-500 bg-white shadow-lg hover:border-red-700"
      >
        🗑️
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
