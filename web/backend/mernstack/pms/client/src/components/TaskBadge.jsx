export const TaskBadge = ({ status }) => {
  const styles = {
    Completed: "bg-green-50 text-green-600",
    "In Progress": "bg-amber-50 text-amber-600",
    Pending: "bg-gray-100 text-gray-500",
  };

  return (
    <span
      className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold ${
        styles[status] || styles.Pending
      }`}
    >
      {status}
    </span>
  );
};