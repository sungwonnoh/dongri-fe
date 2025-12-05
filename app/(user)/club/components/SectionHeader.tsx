"use client";

interface Props {
  title: string;
  rightIcon?: React.ReactNode;
}

export default function SectionHeader({ title, rightIcon }: Props) {
  return (
    <div className="flex justify-between items-center mb-2">
      <span className="font-bold text-[#5C4B1B] text-lg">{title}</span>
      {rightIcon}
    </div>
  );
}
