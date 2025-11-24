"use client";

import Link from "next/link";
import { FaHouse } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { MdCalendarMonth } from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const active = "text-[#5C4B1B]";
  const inactive = "text-[#898066]";

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#F5F1E9] border-t shadow-sm z-50">
      <div className="max-w-2xl mx-auto h-16 flex items-center justify-around px-4">
        {/* Home */}
        <Link
          href="/"
          className={`flex flex-col items-center text-sm ${
            pathname === "/" ? active : inactive
          }`}
        >
          <span className="text-2xl mt-1">
            <FaHouse />
          </span>
        </Link>

        {/* Club */}
        <Link
          href="/club"
          className={`flex flex-col items-center text-sm ${
            pathname.startsWith("/club") ? active : inactive
          }`}
        >
          <span className="text-3xl mt-1">
            <IoPeople />
          </span>
        </Link>

        {/* Calendar */}
        <Link
          href="/calendar"
          className={`flex flex-col items-center text-sm ${
            pathname.startsWith("/calendar") ? active : inactive
          }`}
        >
          <span className="text-2xl mt-1">
            <MdCalendarMonth />
          </span>
        </Link>

        {/* Settings */}
        <Link
          href="/setting"
          className={`flex flex-col items-center text-sm ${
            pathname.startsWith("/setting") ? active : inactive
          }`}
        >
          <span className="text-2xl mt-1">
            <RiUserSettingsFill />
          </span>
        </Link>
      </div>
    </nav>
  );
}
