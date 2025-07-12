"use client";

import { useEffect, useState } from "react";
import { getSecretSearchBySize, SecretSearch } from "@/data/secret-search";
import { Button } from "@/components/ui/button";
import { EmojiFeedback } from "../EmojiFeedback";
import Image from "next/image";
import { Howl } from "howler";
import confetti from "canvas-confetti";
import { useSearchParams } from "next/navigation";

function getUniqueRandomChallenge(
  usedIds: Set<string>,
  size: number
): SecretSearch | null {
  const available = getSecretSearchBySize(size).filter(
    (c) => !usedIds.has(c.id)
  );
  if (available.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * available.length);
  return available[randomIndex];
}

export function ChallengeSecretSearch({
  onSuccess,
  onCancel,
}: {
  onSuccess: () => void;
  onCancel: () => void;
}) {
  const searchParams = useSearchParams();
  const size = parseInt(searchParams.get("size") || "8");

  const [usedIds, setUsedIds] = useState<Set<string>>(new Set());
  const [challenge, setChallenge] = useState<SecretSearch | null>(null);
  const [pinInput, setPinInput] = useState("");
  const [feedbackType, setFeedbackType] = useState<"success" | "fail" | null>(
    null
  );
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    const selected = getUniqueRandomChallenge(usedIds, size);
    if (selected) {
      setChallenge(selected);
      setUsedIds((prev) => new Set(prev).add(selected.id));
    } else {
      onCancel();
    }
  }, []);

  const handleSubmit = () => {
    if (!challenge) return;
    if (pinInput.trim() === challenge.pinCode) {
      setFeedbackType("success");
      setFeedbackOpen(true);
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    } else {
      setFeedbackType("fail");
      setFeedbackOpen(true);
    }
  };

  const handleFeedbackClose = () => {
    setFeedbackOpen(false);
    if (feedbackType === "success") {
      onSuccess();
    } else {
      setPinInput(""); // reset nếu sai
    }
  };

  if (!challenge) return <p>Không còn thử thách bí mật.</p>;

  if (!opened) {
    return (
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/secret-bag.png"
          alt="Túi mù"
          width={400}
          height={400}
          className={`transition-all duration-1000 cursor-pointer ${
            isOpening ? "scale-110 rotate-6 opacity-70" : "hover:scale-105"
          }`}
          onClick={() => {
            if (isOpening) return;
            new Howl({ src: ["/open-bag.mp3"] }).play(); // âm thanh mở túi
            setIsOpening(true);
            setTimeout(() => {
              setOpened(true);
              setIsOpening(false);
              confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.6 },
                scalar: 0.8,
              });
              new Howl({ src: ["/tada.mp3"] }).play();
            }, 2500);
          }}
        />
        <p className="text-muted-foreground text-sm text-center">
          Nhấn vào túi mù để mở thử thách bất ngờ!
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4">
        <div className="bg-green-700 text-white p-4 rounded mb-8">
          <p className="text-2xl font-semibold text-center">
            {challenge.topic}
          </p>
          <ul className="mt-4 list-disc list-inside space-y-2 text-left text-lg">
            {challenge.questions.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength={1}
              autoComplete="off"
              className="w-16 h-16 text-4xl text-center border rounded focus:outline-none focus:ring-2 focus:ring-green-700 bg-white text-green-700 font-semibold"
              value={pinInput[index] || ""}
              onChange={(e) => {
                const val = e.target.value.replace(/[^0-9]/g, "");
                const newPin = pinInput.split("");

                newPin[index] = val || ""; // nếu val rỗng thì vẫn update

                const nextPin = newPin.join("").slice(0, 4);
                setPinInput(nextPin);

                // Nếu có nhập số và chưa tới ô cuối thì focus ô kế tiếp
                if (val && index < 3) {
                  const next = document.getElementById(`pin-${index + 1}`);
                  if (next) (next as HTMLInputElement).focus();
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault();
                  const newPin = pinInput.split("");
                  if (pinInput[index]) {
                    // nếu ô hiện tại có số thì xóa số đó
                    newPin[index] = "";
                    setPinInput(newPin.join(""));
                  } else if (index > 0) {
                    // nếu ô hiện tại rỗng thì lùi về ô trước
                    const prev = document.getElementById(`pin-${index - 1}`);
                    if (prev) (prev as HTMLInputElement).focus();
                    newPin[index - 1] = "";
                    setPinInput(newPin.join(""));
                  }
                }
              }}
              id={`pin-${index}`}
            />
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={handleSubmit}
            className="mt-4 p-6 text-lg bg-green-700"
          >
            Xác nhận
          </Button>
        </div>

        <div className="absolute right-4 bottom-4 font-medium text-lg">
          {challenge.id}
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
