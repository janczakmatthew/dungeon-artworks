function StatusChip({ value }) {
  const colors = {
    completed: "bg-green-500 text-green-100",
    canceled: "bg-red-500 text-red-100",
    refuned: "bg-gray-500 text-gray-100",
    pending: "bg-yellow-500 text-yellow-100",
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-semibold capitalize ${
        colors[value?.toLowerCase()] || "bg-gray-600 text-gray-100"
      }`}
    >
      {value}
    </span>
  );
}

export default StatusChip;