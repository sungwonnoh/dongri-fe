"use client";

export default function Header({ name }: { name: string }) {
  return (
    <div>
      <span className="text-lg font-bold">{name}</span>
    </div>
  );
}
