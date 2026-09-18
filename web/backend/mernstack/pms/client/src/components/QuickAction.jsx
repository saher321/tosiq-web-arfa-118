export const QuickAction = ({
  icon: Icon,
  title,
  href,
}) => {
  return (
    <a
      href={href}
      className="group rounded-xl border border-gray-200 p-4 transition hover:border-amber-200 hover:bg-amber-50"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-500 transition group-hover:bg-amber-100 group-hover:text-amber-600">
        <Icon size={18} />
      </div>

      <p className="mt-3 text-xs font-semibold text-gray-700 group-hover:text-gray-900">
        Add {title}
      </p>
    </a>
  );
};