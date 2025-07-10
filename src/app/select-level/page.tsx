"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function SelectLevelPage() {
  const router = useRouter();
  const [age, setAge] = useState("8");
  const inputRef = useRef<HTMLInputElement>(null);

  // Tự động focus khi trang mở
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleStart = () => {
    const parsedAge = parseInt(age);
    if (!isNaN(parsedAge) && parsedAge > 0) {
      router.push(`/maze?size=${parsedAge}`);
    } else {
      alert("Vui lòng nhập tuổi hợp lệ!");
    }
  };

  // Bắt phím Enter
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleStart();
    }
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
      <h1 className="text-4xl font-bold text-green-700 mb-8">
        Nhập tuổi của bạn
      </h1>
      <div className="space-y-4 w-full max-w-sm">
        <input
          ref={inputRef}
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full text-center text-9xl font-bold text-green-700 bg-transparent outline-none border-none placeholder:text-green-300"
        />
        <Button
          className="text-lg py-6 bg-green-700 hover:bg-green-800 w-full"
          onClick={handleStart}
        >
          Bắt đầu
        </Button>
      </div>
    </main>
  );
}
