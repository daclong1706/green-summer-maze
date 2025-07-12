"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { getTruthItemsBySize, TruthItem } from "@/data/truth-check";
import { EmojiFeedback } from "../EmojiFeedback";
import Image from "next/image";

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function ChallengeTruthCheck({
  onSuccess,
  onCancel,
}: {
  onSuccess: () => void;
  onCancel: () => void;
}) {
  const searchParams = useSearchParams();
  const size = parseInt(searchParams.get("size") || "8");

  const [questions, setQuestions] = useState<TruthItem[]>([]);
  const [current, setCurrent] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [feedbackType, setFeedbackType] = useState<"success" | "fail" | null>(
    null
  );
  const [showEmoji, setShowEmoji] = useState(false);
  const [selectedExplanation, setSelectedExplanation] = useState("");
  const [shouldCancel, setShouldCancel] = useState(false);

  useEffect(() => {
    const pool = getTruthItemsBySize(size);
    const selected = shuffle(pool).slice(0, 5);
    setQuestions(selected);
  }, [size]);

  const handleAnswer = (choice: "real" | "fake") => {
    const answer = questions[current];
    const isCorrect =
      (choice === "real" && answer.isTrue) ||
      (choice === "fake" && !answer.isTrue);

    setFeedbackType(isCorrect ? "success" : "fail");
    setSelectedExplanation(answer.explanation || "");
    setShowEmoji(true);

    if (isCorrect) {
      setCorrect((prev) => prev + 1);
    } else {
      const newFails = failCount + 1;
      setFailCount(newFails);
      if (newFails >= 3) {
        setShouldCancel(true);
      }
    }

    setTimeout(() => {
      setShowEmoji(false);
      setShowDialog(true);
    }, 1200); // delay ngắn để emoji hiện xong rồi mới mở dialog
  };

  const handleNext = () => {
    setShowDialog(false);

    if (shouldCancel) {
      onCancel();
      return;
    }

    const next = current + 1;
    if (next >= 5) {
      if (correct >= 3) onSuccess();
      else onCancel();
    } else {
      setCurrent(next);
    }
  };

  if (questions.length === 0) return null;
  const item = questions[current];

  return (
    <>
      <div className="flex flex-col justify-between px-4 py-6">
        <div className="space-y-4">
          <div className="flex justify-between">
            <div className="flex justify-center gap-1">
              {Array.from({ length: 3 }).map((_, idx) => (
                <span key={idx} className="text-xl">
                  {idx < 3 - failCount ? "❤️" : "🤍"}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center">
            {item.type === "image" ? (
              <Image
                src={item.content}
                alt="Thông tin kiểm chứng"
                width={0} // cần thiết khi dùng sizes
                height={0}
                sizes="100vw"
                className="w-auto h-auto max-w-full min-h-[60vh] mx-auto rounded"
              />
            ) : (
              <p className="text-xl font-semibold bg-slate-100 p-6 rounded">
                {item.content}
              </p>
            )}
          </div>

          <div className="flex justify-center gap-8 mt-6">
            <Button
              onClick={() => handleAnswer("real")}
              className="bg-green-600 text-white text-lg px-6 py-3 hover:bg-green-700"
            >
              Thật
            </Button>
            <Button
              onClick={() => handleAnswer("fake")}
              className="bg-red-600 text-white text-lg px-6 py-3 hover:bg-red-700"
            >
              Giả
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Câu {current + 1}/5 – Đúng {correct}/5
          </p>
        </div>
      </div>

      {/* Emoji phản hồi */}
      <EmojiFeedback
        open={showEmoji}
        imageSrc={feedbackType === "success" ? "/success.png" : "/fail.png"}
        soundSrc={feedbackType === "success" ? "/success.mp3" : "/fail.mp3"}
        onClose={() => setShowEmoji(false)}
      />

      {/* Dialog giải thích + nút tiếp tục */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center text-xl uppercase">
              {feedbackType === "success" ? "Chính xác" : "Sai rồi"}
            </DialogTitle>
          </DialogHeader>
          <div className="text-lg text-muted-foreground text-left mt-2">
            {selectedExplanation}
          </div>
          <DialogFooter className="justify-center mt-4">
            <Button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Tiếp tục
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
