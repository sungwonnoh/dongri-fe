"use client";

import React from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* 상단 고정 헤더 */}
      <Header />
      <main className="flex-1 w-full max-w-2xl mx-auto p-4 pt-20 pb-24">
        {children}
      </main>

      {/* 하단 고정 네비 */}
      <BottomNav />
    </div>
  );
}
