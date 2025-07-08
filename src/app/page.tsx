// src/app/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/select-level");
  };

  return (
    <main
      className="min-h-screen p-4 bg-green-50 flex items-end justify-center gap-8"
      style={{
        backgroundImage: 'url("/BG.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <h1 className="text-4xl font-bold text-green-700 mb-6">
        Mê Cung Mùa Hè Xanh 🌿
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Khám phá mê cung và vượt qua những thử thách thú vị!
      </p> */}
      <Button
        onClick={handleStart}
        className="text-lg px-6 py-6 rounded-md mb-32 bg-red-600 text-white shadow-lg hover:bg-red-700 transition-colors"
      >
        Bắt đầu chơi
      </Button>
    </main>
  );
}
