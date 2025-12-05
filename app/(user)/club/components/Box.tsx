"use client";

export default function Box({
  clubname,
  notice,
  operator,
  onClick,
}: {
  clubname: string;
  notice: string;
  operator: string;
  onClick: () => void;
}) {
  const isOperator = operator === "운영진";

  return (
    <div
      className="flex flex-col p-4 border rounded-2xl bg-[#D6D0BD] gap-2 shadow-lg"
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-between">
        {/* club name */}
        <div className="text-lg font-bold">{clubname}</div>

        {/* operator badge */}
        {isOperator && (
          <div
            className="px-3 py-1 bg-[#B8B08D] text-[#5C4B1B] 
                       text-xs rounded-full font-semibold shadow-sm"
          >
            운영진
          </div>
        )}
      </div>

      <div className="whitespace-pre-line text-[#483F2B] text-sm leading-relaxed">
        {notice}
      </div>
    </div>
  );
}
