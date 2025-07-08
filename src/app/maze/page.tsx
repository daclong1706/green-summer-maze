// src/app/maze/page.tsx
import { Suspense } from "react";
import MazeClient from "./MazeClient";

export default function MazePage() {
  return (
    <Suspense fallback={<div>Đang tải mê cung...</div>}>
      <MazeClient />
    </Suspense>
  );
}
