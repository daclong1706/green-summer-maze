"use client";

import { useRouter } from "next/navigation";

export function VictoryScreen() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-8 shadow-xl text-center space-y-6 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-green-600">
          🎉 Chúc mừng bạn đã chiến thắng! 🎉
        </h1>
        <p className="text-muted-foreground text-lg">
          Bạn đã hoàn thành thử thách một cách xuất sắc.
        </p>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow transition"
        >
          Quay lại trang chủ
        </button>
      </div>
    </div>
  );
}
