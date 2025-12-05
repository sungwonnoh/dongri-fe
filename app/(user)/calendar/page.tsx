"use client";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Calendar from "react-calendar";
import { BsPlusSquare } from "react-icons/bs";

export default function CalendarPage() {
  const [value, setValue] = useState(new Date());

  const events = [
    { date: 5, label: "해무리", color: "#DF5C3B" },
    { date: 13, label: "Hufspike", color: "#6494D6" },
    { date: 24, label: "UMC", color: "#000" },
    { date: 27, label: "기타", color: "#B8B08D" },
  ];

  return (
    <div>
      {/* 캘린더 상단 제목 */}
      <div className="flex items-center justify-between mb-2">
        <p className="font-bold text-[#5C4B1B] text-lg">통합 일정</p>
        <BsPlusSquare size={22} className="text-[#5C4B1B]" />
      </div>

      {/* 캘린더 */}
      <div className="bg-[#FDFDFB] border rounded-xl shadow-md p-2">
        <Calendar
          onChange={setValue}
          value={value}
          locale="ko"
          className="rounded-lg"
          tileContent={({ date }) => {
            const event = events.find((e) => e.date === date.getDate());
            return event ? (
              <div
                className="w-2 h-2 rounded-full mx-auto mt-1"
                style={{ backgroundColor: event.color }}
              />
            ) : null;
          }}
        />
      </div>

      <div className="mt-4 space-y-2 text-sm">
        {events.map((e, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: e.color }}
            />
            <span className="text-[#5C4B1B]">{e.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
