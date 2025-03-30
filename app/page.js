"use client";

import Detector from "@/components/Detector";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center p-8">
      <h1 className="gradient-title font-extrabold text-3xl md:text-6xl lg:text-8xl tracking-tighter">
        Detective Ai
      </h1>
      <Detector />
    </main>
  );
}
