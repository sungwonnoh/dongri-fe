"use client";

interface Props {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
}

export default function TabMenu({ tabs, active, onChange }: Props) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {tabs.map((tab) => {
        const isActive = active === tab;
        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`py-2 rounded-xl font-semibold text-sm shadow transition ${
              isActive
                ? "bg-[#B8B08D] text-white"
                : "bg-[#D2CAB4] text-[#5C4B1B]"
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
