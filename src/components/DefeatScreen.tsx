"use client";

import { useRouter } from "next/navigation";

export function DefeatScreen() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-8 shadow-xl text-center space-y-6 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-red-600">
          😢 Rất tiếc, bạn đã thua cuộc!
        </h1>
        <p className="text-muted-foreground text-lg">
          Hãy thử lại và chinh phục thử thách nhé!
        </p>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow transition"
        >
          Quay lại trang chủ
        </button>
      </div>
    </div>
  );
}
