"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChallengeReorder } from "@/components/challenges/reorder";
import { ChallengeMatch } from "@/components/challenges/match";
import { ChallengeTrafficLight } from "../challenges/traffic-light";
import { tr } from "framer-motion/client";
import { ChallengeClean } from "../challenges/clean";
import { ChallengeQuiz } from "../challenges/quiz";

interface ChallengeModalProps {
  show: boolean;
  type: string | null;
  onSuccess: () => void;
  onCancel: () => void;
}

const titles: Record<string, string> = {
  reorder: "Sắp xếp từ có nghĩa",
  match: "Ghép cặp thông minh",
  traffic: "Đèn giao thông an toàn",
  clean: "Dọn dẹp rác thải",
  quiz: "Kiến thức tỉnh táo",
};

export const ChallengeModal = ({
  show,
  type,
  onSuccess,
  onCancel,
}: ChallengeModalProps) => {
  return (
    <Dialog open={show} onOpenChange={(open) => !open && onCancel()}>
      <DialogContent
        className="w-full min-w-screen min-h-screen text-center rounded-none"
        style={{
          backgroundImage: 'url("/bg-level.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-green-700 uppercase">
            {type && titles[type]}
          </DialogTitle>
        </DialogHeader>

        {type === "reorder" && (
          <ChallengeReorder onSuccess={onSuccess} onCancel={onCancel} />
        )}
        {type === "match" && (
          <ChallengeMatch onSuccess={onSuccess} onCancel={onCancel} />
        )}
        {type === "traffic" && (
          <ChallengeTrafficLight onSuccess={onSuccess} onCancel={onCancel} />
        )}
        {type === "clean" && (
          <ChallengeClean onSuccess={onSuccess} onCancel={onCancel} />
        )}
        {type === "quiz" && (
          <ChallengeQuiz onSuccess={onSuccess} onCancel={onCancel} />
        )}
      </DialogContent>
    </Dialog>
  );
};
