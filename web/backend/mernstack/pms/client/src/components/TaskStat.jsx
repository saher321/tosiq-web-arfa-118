export const TaskStat = ({
  icon: Icon,
  label,
  value,
  percentage,
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-500">
        <Icon size={18} />
      </div>

      <div className="flex-1">
        <div className="flex justify-between">
          <span className="text-sm font-medium text-gray-700">
            {label}
          </span>

          <span className="text-sm font-bold text-gray-900">
            {value}
          </span>
        </div>

        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-amber-600"
            style={{ width: percentage }}
          />
        </div>
      </div>
    </div>
  );
};