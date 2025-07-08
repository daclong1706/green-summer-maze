// src/components/challenges/ChallengeQuiz.tsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getQuestionsBySize } from "@/data/quiz-questions";
import { Button } from "@/components/ui/button";
import { EmojiFeedback } from "../EmojiFeedback";

export function ChallengeQuiz({
  onSuccess,
  onCancel,
}: {
  onSuccess: () => void;
  onCancel: () => void;
}) {
  const searchParams = useSearchParams();
  const size = parseInt(searchParams.get("size") || "8");

  const [questions, setQuestions] = useState<
    {
      question: string;
      options: string[];
      correctIndex: number;
    }[]
  >([]);
  const [current, setCurrent] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackType, setFeedbackType] = useState<"success" | "fail" | null>(
    null
  );

  useEffect(() => {
    const all = getQuestionsBySize(size);
    const selected = all.sort(() => 0.5 - Math.random()).slice(0, 5);
    setQuestions(selected);
  }, [size]);

  const handleAnswer = (index: number) => {
    const isCorrect = questions[current].correctIndex === index;
    if (isCorrect) {
      setCorrect((prev) => prev + 1);
      setFeedbackType("success");
    } else {
      setFailCount((prev) => prev + 1);
      setFeedbackType("fail");
    }
    setFeedbackOpen(true);
  };

  const handleFeedbackClose = () => {
    setFeedbackOpen(false);

    const next = current + 1;
    if (failCount >= 3) return onCancel();
    if (next >= 5) {
      if (correct >= 3) onSuccess();
      else onCancel();
    } else {
      setCurrent(next);
    }
  };

  if (!questions.length) return <p>Đang tải câu hỏi...</p>;

  const q = questions[current];
  const optionColors = [
    "bg-blue-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-pink-100",
  ];

  return (
    <>
      <div className="space-y-4">
        <div className="flex justify-between">
          <p className="text-muted-foreground text-sm">Câu {current + 1}</p>
          <div className="flex justify-center gap-1">
            {Array.from({ length: 3 }).map((_, idx) => (
              <span key={idx} className="text-xl">
                {idx < 3 - failCount ? "❤️" : "🤍"}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-base font-medium">{q.question}</p>
          <div className="grid grid-cols-2 gap-4">
            {q.options.map((opt, idx) => (
              <Button
                key={idx}
                variant="outline"
                className={`w-full text-left h-20 ${
                  optionColors[idx % optionColors.length]
                }`}
                onClick={() => handleAnswer(idx)}
              >
                {opt}
              </Button>
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
