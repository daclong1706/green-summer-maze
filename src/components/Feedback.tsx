"use client";

import { useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

interface FeedbackProps {
  open: boolean;
  message: string;
  imageSrc?: string; // ảnh tùy chọn
  onClose: () => void;
}

export const Feedback = ({
  open,
  message,
  imageSrc,
  onClose,
}: FeedbackProps) => {
  useEffect(() => {
    if (open) {
      const timeout = setTimeout(onClose, 1000); // ⏱️ 1s
      return () => clearTimeout(timeout);
    }
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-xl shadow-xl p-6 w-80 text-center space-y-4 animate-fade-in">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt="Thông báo"
            width={60}
            height={60}
            className="mx-auto"
          />
        )}
        <p className="text-lg font-semibold">{message}</p>
      </div>
    </div>,
    document.body
  );
};
