"use client";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#FDFDFB] border border-[#D6D0BD] rounded-2xl p-4 shadow-sm">
      {children}
    </div>
  );
}
