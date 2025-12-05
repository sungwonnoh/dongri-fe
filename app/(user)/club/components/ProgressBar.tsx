"use client";

interface Props {
  percent: number;
  label?: string;
}

export default function ProgressBar({ percent, label }: Props) {
  return (
    <div className="w-full bg-[#E5E0D1] rounded-full h-6 border border-[#D6D0BD] overflow-hidden">
      <div
        className="bg-[#6B92FF] h-full rounded-full text-white text-xs flex items-center px-2 transition-all"
        style={{ width: `${percent}%` }}
      >
        {label}
      </div>
    </div>
  );
}
