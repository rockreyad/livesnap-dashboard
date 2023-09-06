export default function SectionHeader({
  title,
  secondaryText,
  className,
}: {
  title: string;
  secondaryText?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col pb-36 ${className}`}>
      <text className="text-2xl font-semibold capitalize">{title}</text>
      {/* Sub headline */}
      {secondaryText && (
        <text className="text-sm font-normal capitalize  text-gray-500">
          {secondaryText}
        </text>
      )}
    </div>
  );
}
