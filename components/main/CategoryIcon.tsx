"use client";

import { categories } from "../Icons";

export default function CategoryIcons() {
  return (
    <div className="flex justify-between px-4 py-3">
      {categories.map((cat) => {
        const Icon = cat.icon;
        return (
          <div
            key={cat.id}
            className="flex flex-col items-center text-sm text-[#5C4B1B]"
          >
            <Icon size={28} color={cat.color} />
            <span className="mt-1">{cat.label}</span>
          </div>
        );
      })}
    </div>
  );
}
