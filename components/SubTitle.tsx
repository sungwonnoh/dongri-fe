"use client";

export default function SubTitle({ name }: { name: string }) {
  return (
    <div className="my-2">
      <h3 className="text-xl font-bold text-[#B16B45] mb-2">{name}</h3>
    </div>
  );
}
