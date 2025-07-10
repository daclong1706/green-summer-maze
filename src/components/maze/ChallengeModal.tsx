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
import { ChallengeClean } from "../challenges/clean";
import { ChallengeQuiz } from "../challenges/quiz";
import { ChallengeTruthCheck } from "../challenges/truth-check";
import { ChallengeSecretSituation } from "../challenges/secret-situation";
import { ChallengeSecretSearch } from "../challenges/secret-search";

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
  truth: "Sự thật hay tin giả",
  situation: "Tình huống bí mật",
  search: "Tìm kiếm bí mật",
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
        <DialogHeader className="p-0">
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
        {type === "truth" && (
          <ChallengeTruthCheck onSuccess={onSuccess} onCancel={onCancel} />
        )}
        {type === "situation" && (
          <ChallengeSecretSituation onSuccess={onSuccess} onCancel={onCancel} />
        )}
        {type === "search" && (
          <ChallengeSecretSearch onSuccess={onSuccess} onCancel={onCancel} />
        )}
      </DialogContent>
    </Dialog>
  );
};
