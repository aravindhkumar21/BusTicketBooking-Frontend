import { Armchair } from "lucide-react";

const SeatIcon = ({
  status = "AVAILABLE",
  selected = false,
  size = 24,
}) => {
  const normalizedStatus = status?.toUpperCase();

  const statusClass = selected
    ? "selected"
    : normalizedStatus === "BOOKED"
      ? "booked"
      : "available";

  return (
    <Armchair
      size={size}
      className={`seat-icon seat-${statusClass}`}
    />
  );
};

export default SeatIcon;