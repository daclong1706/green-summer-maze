"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Howl } from "howler";

interface EmojiFeedbackProps {
  open: boolean;
  imageSrc?: string;
  soundSrc?: string;
  duration?: number; // mặc định 1000ms
  onClose: () => void;
}

export const EmojiFeedback = ({
  open,
  imageSrc,
  soundSrc,
  duration = 1500,
  onClose,
}: EmojiFeedbackProps) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const onCloseRef = useRef(onClose);
  const lastTriggerId = useRef<number>(0);
  const [showImage, setShowImage] = useState(false);

  // Luôn dùng hàm onClose mới nhất
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (open) {
      const thisTrigger = Date.now();
      lastTriggerId.current = thisTrigger;

      // Phát âm thanh trước
      if (soundSrc) {
        const sound = new Howl({ src: [soundSrc] });
        sound.play();
      }

      // Hiện hình ảnh sau 200ms
      const imgDelay = setTimeout(() => {
        if (lastTriggerId.current === thisTrigger) {
          setShowImage(true);
        }
      }, 200);

      // Tự động đóng sau duration
      timeoutRef.current = setTimeout(() => {
        if (lastTriggerId.current === thisTrigger) {
          setShowImage(false); // ẩn hình
          onCloseRef.current(); // gọi callback đóng
        }
      }, duration);

      return () => {
        clearTimeout(imgDelay);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        setShowImage(false);
      };
    }
  }, [open, soundSrc, duration]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="bg-transparent p-4 flex flex-col items-center max-w-[90vw] max-h-[90vh]">
        {showImage && imageSrc && (
          <Image
            src={imageSrc}
            alt="Feedback"
            width={120}
            height={120}
            className="animate-bounce max-w-full max-h-full object-contain"
          />
        )}
      </div>
    </div>
  );
};
