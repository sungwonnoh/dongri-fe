"use client";

import { FaUser } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import { FaHouse } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { MdCalendarMonth } from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";
import { usePathname } from "next/navigation";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // 현재 경로 가져오기

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 w-full max-w-2xl mx-auto p-4 pb-24">
        {children}
      </main>

      {/* bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#F5F1E9] border-t shadow-sm">
        <div className="max-w-2xl mx-auto h-16 flex items-center justify-around px-4">
          {/* Home */}
          <Link
            href="/"
            className={`flex flex-col items-center text-sm ${
              pathname === "/" ? "text-[#5C4B1B]" : "text-[#898066]"
            }`}
          >
            <span className="text-2xl mt-1">
              <FaHouse />
            </span>
          </Link>

          {/* Profile */}
          <Link
            href="/user/profile"
            className={`flex flex-col items-center text-sm ${
              pathname.startsWith("/user/profile")
                ? "text-[#5C4B1B]"
                : "text-[#898066]"
            }`}
          >
            <span className="text-2xl mt-1">
              <IoPeople />
            </span>
          </Link>

          {/* Projects */}
          <Link
            href="/user/projects"
            className={`flex flex-col items-center text-sm ${
              pathname.startsWith("/user/projects")
                ? "text-[#5C4B1B]"
                : "text-[#898066]"
            }`}
          >
            <span className="text-2xl mt-1">
              <MdCalendarMonth />
            </span>
          </Link>

          {/* Settings */}
          <Link
            href="/user/settings"
            className={`flex flex-col items-center text-sm ${
              pathname.startsWith("/user/settings")
                ? "text-[#5C4B1B]"
                : "text-[#898066]"
            }`}
          >
            <span className="text-2xl mt-1">
              <RiUserSettingsFill />
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
