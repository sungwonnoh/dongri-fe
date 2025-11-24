"use client";

import { MdSportsKabaddi } from "react-icons/md";

export default function RecommendedClubCard() {
  return (
    <div>
      <div className="bg-white border rounded-2xl p-4 shadow">
        <div className="flex items-center gap-2">
          <MdSportsKabaddi size={22} color="#B34A3D" />
          <span className="font-semibold text-[#5C4B1B]">스포츠레저분과</span>
          <span className="ml-1 text-[#5C4B1B]">Airo</span>
        </div>

        <div className="mt-1 text-[#898066] text-sm">
          함께 즐기며 성장하는 자유로운 스케이트보드 동아리
        </div>
      </div>
    </div>
  );
}
