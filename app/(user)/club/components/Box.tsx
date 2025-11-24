"use client";

export default function Box({
  clubname,
  notice,
  onClick,
}: {
  clubname: string;
  notice: string;
  onClick: () => void;
}) {
  return (
    <div
      className="flex flex-col p-2 border rounded-2xl bg-[#D6D0BD] gap-2 shadow-lg"
      onClick={onClick}
    >
      <div className="text-lg font-bold">{clubname}</div>
      <div>{notice}</div>
    </div>
  );
}
