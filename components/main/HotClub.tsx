"use client";

import { FaFireAlt } from "react-icons/fa";
import { categories } from "../Icons";

const hotClubs = [
  { categoryId: 1, club: "해무리" },
  { categoryId: 2, club: "Hufspike" },
  { categoryId: 3, club: "누리에" },
  { categoryId: 4, club: "IVF" },
  { categoryId: 5, club: "UMC" },
];

export default function HotClubList() {
  return (
    <div className="mt-3">
      <div className="bg-white border rounded-2xl shadow px-4 py-3">
        {hotClubs.map((item, index) => {
          const cat = categories.find((c) => c.id === item.categoryId);
          const Icon = cat?.icon;

          return (
            <div
              key={index}
              className="flex items-center justify-between py-2 border-b last:border-none"
            >
              <div className="flex items-center gap-2">
                {/* 카테고리 아이콘 */}
                {Icon && <Icon size={22} color={cat.color} />}
                <span className="font-semibold text-[#5C4B1B]">
                  {cat.label}분과
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[#5C4B1B]">{item.club}</span>
                <FaFireAlt color="#FF5B5B" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
