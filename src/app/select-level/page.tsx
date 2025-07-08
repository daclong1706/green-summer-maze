// src/app/select-level/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const LEVELS = [
  { label: "Bé mới lên mạng", size: 8, level: 1 }, // Dễ – Làm quen
  { label: "Người dùng thông minh", size: 12, level: 2 }, // Biết phân biệt đúng sai
  { label: "Người bảo vệ thông tin", size: 16, level: 3 }, // Biết giữ an toàn cá nhân
  { label: "Chiến binh chống tin giả", size: 20, level: 4 }, // Biết phát hiện và tránh tin giả
  { label: "Thủ lĩnh tỉnh táo", size: 24, level: 5 }, // Cấp cao nhất – Tỉnh táo, trách nhiệm
];

export default function SelectLevelPage() {
  const router = useRouter();

  const handleSelect = (size: number) => {
    router.push(`/maze?size=${size} `);
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6"
      style={{
        backgroundImage: 'url("/bg-level.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl font-bold text-green-700 mb-8">Chọn cấp độ</h1>
      <div className="grid gap-4 w-full max-w-md">
        {LEVELS.map((level) => (
          <Button
            key={level.size}
            className="text-lg py-6 bg-green-700 hover:bg-green-800"
            onClick={() => handleSelect(level.size)}
          >
            {level.label}
          </Button>
        ))}
      </div>
    </main>
  );
}
