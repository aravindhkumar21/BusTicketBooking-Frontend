const StatusBadge = ({ status }) => {
  if (!status) return null;

  const normalizedStatus = status.toUpperCase();

  const statusClass = {
    AVAILABLE: "success",
    BOOKED: "danger",
    PENDING: "warning",
    SUCCESS: "success",
    FAILED: "danger",
    REFUNDED: "info",
    CANCELLED: "danger",
    COMPLETED: "success",
  }[normalizedStatus] || "default";

  const label = normalizedStatus
    .toLowerCase()
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letter) =>
      letter.toUpperCase()
    );

  return (
    <span
      className={`status-badge status-${statusClass}`}
    >
      {label}
    </span>
  );
};

export default StatusBadge;