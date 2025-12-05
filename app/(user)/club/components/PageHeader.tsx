"use client";

interface Props {
  title: string;
  rightButtonLabel?: string;
  onRightButtonClick?: () => void;
}

export default function PageHeader({
  title,
  rightButtonLabel,
  onRightButtonClick,
}: Props) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-extrabold text-[#5C4B1B]">{title}</h2>

      {rightButtonLabel && (
        <button
          className="bg-[#B8B08D] text-[#5C4B1B] text-sm px-3 py-1 rounded-lg font-semibold shadow"
          onClick={onRightButtonClick}
        >
          {rightButtonLabel}
        </button>
      )}
    </div>
  );
}
